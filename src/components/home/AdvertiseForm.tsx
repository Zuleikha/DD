import React, { useState, ChangeEvent, FormEvent, FC, useRef } from "react";
import { X, Plus, Minus, Mail } from "lucide-react";

interface AdvertiseFormProps {
    onClose: () => void;
}

interface BusinessData {
    serviceCategory: string;
    businessName: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    socialMedia: string;
    image: File | null;
}

interface OptionalField {
    id: keyof BusinessData;
    label: string;
    type: 'text' | 'email' | 'url' | 'tel' | 'textarea';
    placeholder: string;
    enabled: boolean;
}

const AdvertiseForm: FC<AdvertiseFormProps> = ({ onClose }) => {
    const [businessData, setBusinessData] = useState<BusinessData>({
        serviceCategory: "",
        businessName: "",
        description: "",
        address: "",
        phone: "",
        email: "",
        website: "",
        socialMedia: "",
        image: null
    });

    const [preview, setPreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Service categories matching your HomePage services
    const serviceCategories = [
        { value: "vets", label: "Veterinary Services" },
        { value: "parks", label: "Parks & Walks" },
        { value: "nutrition", label: "Nutrition" },
        { value: "training", label: "Dog Training" },
        { value: "grooming", label: "Grooming" },
        { value: "places", label: "Dog-Friendly Places" },
        { value: "petshops", label: "Pet Shops" },
        { value: "minders", label: "Dog Minders" },
        { value: "advice", label: "Community & Advice" }
    ];

    // Optional fields that users can add/remove
    const [optionalFields, setOptionalFields] = useState<OptionalField[]>([
        { id: "address", label: "Address", type: "text", placeholder: "Enter your business address", enabled: false },
        { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", enabled: false },
        { id: "email", label: "Email", type: "email", placeholder: "Enter your email address", enabled: false },
        { id: "website", label: "Website", type: "url", placeholder: "Enter your website URL", enabled: false },
        { id: "socialMedia", label: "Social Media", type: "text", placeholder: "Enter your social media handle/link", enabled: false }
    ]);

    // Handle input changes
    const handleInputChange = (field: keyof BusinessData, value: string) => {
        setBusinessData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Handle image selection and preview
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setBusinessData(prev => ({ ...prev, image: file }));
            setPreview(URL.createObjectURL(file));
        } else {
            setBusinessData(prev => ({ ...prev, image: null }));
            setPreview(null);
        }
    };

    // Toggle optional fields
    const toggleOptionalField = (fieldId: keyof BusinessData) => {
        setOptionalFields(prev => 
            prev.map(field => 
                field.id === fieldId 
                    ? { ...field, enabled: !field.enabled }
                    : field
            )
        );

        // Clear the field value if disabling
        if (optionalFields.find(f => f.id === fieldId)?.enabled) {
            setBusinessData(prev => ({
                ...prev,
                [fieldId]: ""
            }));
        }
    };

    // Send email with business information using Firebase Cloud Function
    const sendBusinessEmail = async (businessInfo: BusinessData) => {
        const categoryLabel = serviceCategories.find(cat => cat.value === businessInfo.serviceCategory)?.label;
        
        // Construct the subject and message for the email
        const emailSubject = `New Business Listing Submission - ${categoryLabel}`;
        const emailBody = `
New Business Listing Submission\n\nService Category: ${categoryLabel}\nBusiness Name: ${businessInfo.businessName}\nDescription: ${businessInfo.description}\n\n${businessInfo.address ? `Address: ${businessInfo.address}` : ''}\n${businessInfo.phone ? `Phone: ${businessInfo.phone}` : ''}\n${businessInfo.email ? `Email: ${businessInfo.email}` : ''}\n${businessInfo.website ? `Website: ${businessInfo.website}` : ''}\n${businessInfo.socialMedia ? `Social Media: ${businessInfo.socialMedia}` : ''}\n\n${businessInfo.image ? 'Image: Attached' : 'No image provided'}\n\nSubmitted on: ${new Date().toLocaleString()}\n        `.trim();

        // Your deployed Firebase Cloud Function URL
        const functionUrl = 'https://sendemail-cpsx3cra3q-uc.a.run.app'; // <<< IMPORTANT: Use your actual Function URL here

        try {
            const response = await fetch(functionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipientEmail: 'dogdays.ie@gmail.com', // <<< IMPORTANT: The email address where you want to receive the form data
                    subject: emailSubject,
                    message: emailBody,
                } ),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Email sent successfully:', result);
                return { success: true };
            } else {
                const errorData = await response.json();
                console.error('Error sending email:', errorData);
                return { success: false, error: errorData.message || 'Unknown error' };
            }
        } catch (error) {
            console.error('Network or unexpected error:', error);
            return { success: false, error: 'An unexpected error occurred.' };
        }
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Basic validation
        if (!businessData.serviceCategory || !businessData.businessName.trim() || !businessData.description.trim()) {
            alert("Please fill in all required fields (Service Category, Business Name, and Description).");
            setIsSubmitting(false);
            return;
        }

        try {
            // Send email with business information
            const result = await sendBusinessEmail(businessData);
            
            if (result.success) {
                const categoryLabel = serviceCategories.find(cat => cat.value === businessData.serviceCategory)?.label;
                alert(`Thank you! Your business "${businessData.businessName}" information has been sent to Dog Days Ireland for review. We'll add it to the ${categoryLabel} section after approval.`);

                // Reset form
                setBusinessData({
                    serviceCategory: "",
                    businessName: "",
                    description: "",
                    address: "",
                    phone: "",
                    email: "",
                    website: "",
                    socialMedia: "",
                    image: null
                });
                setPreview(null);
                setOptionalFields(prev => prev.map(field => ({ ...field, enabled: false })));
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }

                // Close the form
                onClose();
            } else {
                alert("There was an issue sending your information. Please try again or contact us directly at dogdays.ie@gmail.com");
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert("There was an error submitting your information. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Mail className="text-blue-600" size={24} />
                    Advertise Your Dog Service
                </h2>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                    <strong>How it works:</strong> Fill out the form below and your business information will be sent to our team for review. 
                    We'll add approved listings to the appropriate service section on our website.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Category Dropdown - Required */}
                <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="serviceCategory"
                        value={businessData.serviceCategory}
                        onChange={(e) => handleInputChange('serviceCategory', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                        <option value="">Select a service category</option>
                        {serviceCategories.map(category => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Business Name - Required */}
                <div>
                    <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="businessName"
                        type="text"
                        value={businessData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        required
                        placeholder="Enter your business name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                </div>

                {/* Description - Required */}
                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="description"
                        value={businessData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        required
                        placeholder="Describe your service and what makes it special"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    />
                </div>

                {/* Optional Fields Section */}
                <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Additional Information (Optional)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Add any additional details you'd like to include. You can add or remove fields as needed.
                    </p>

                    {/* Optional Field Toggles */}
                    <div className="space-y-4">
                        {optionalFields.map(field => (
                            <div key={field.id}>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-semibold text-gray-700">
                                        {field.label}
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => toggleOptionalField(field.id)}
                                        className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                            field.enabled
                                                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                                : 'bg-green-100 text-green-700 hover:bg-green-200'
                                        }`}
                                    >
                                        {field.enabled ? (
                                            <>
                                                <Minus size={16} />
                                                Remove
                                            </>
                                        ) : (
                                            <>
                                                <Plus size={16} />
                                                Add
                                            </>
                                        )}
                                    </button>
                                </div>

                                {field.enabled && (
                                    <div className="transition-all duration-200">
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                value={businessData[field.id] as string}
                                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                placeholder={field.placeholder}
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                value={businessData[field.id] as string}
                                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                placeholder={field.placeholder}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Upload */}
                <div className="border-t pt-6">
                    <label htmlFor="imageUpload" className="block text-sm font-semibold text-gray-700 mb-2">
                        Upload Image (Optional)
                    </label>
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                        className="w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                    />
                    {preview && (
                        <div className="mt-4">
                            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                            <img src={preview} alt="Image Preview" className="max-w-xs h-auto rounded-lg shadow" />
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-lg
                            hover:bg-blue-700 transition-colors
                            disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Your Business'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdvertiseForm;
