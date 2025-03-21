import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser'; // Import EmailJS

interface FormData {
    name: string;
    email: string;
    message: string;
    subject: string; // Add subject field
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        subject: 'Enquiry', // Add subject with fixed value
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { name, email, message, subject } = formData;

            const serviceId = 'service_t8ar89n';  // Replace with your EmailJS service ID
            const templateId = 'template_phfek36'; // Replace with your EmailJS template ID
            const publicKey = '2jE2BgZuzzptLiRoy';  // Replace with your EmailJS public key


            const templateParams = {
                name,
                email,
                message,
                subject,  // Include the subject in the template parameters
            };

            if (!serviceId || !templateId || !publicKey) {
                console.error("EmailJS credentials not found in environment variables.");
                toast({
                    title: "Error",
                    description: "Email service configuration is missing. Please contact the administrator.",
                    variant: "destructive",
                });
                setIsSubmitting(false);
                return;
            }

            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

            console.log('Email sent successfully:', response);

            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '', subject: 'Enquiry' }); // Include the fixed subject
            toast({
                title: "Message sent",
                description: "Thank you for your message. I'll get back to you soon.",
            });
        } catch (error: any) {
            console.error('Error sending email:', error);
            toast({
                title: "Error",
                description: `Something went wrong. Please try again. ${error.message || 'No details available.'}`,
                variant: "destructive",
            });
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-display font-medium mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background transition-all resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-primary text-white rounded-full transition-all",
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:translate-y-[-2px]"
                    )}
                >
                    {isSubmitting ? (
                        <>Sending<span className="ml-2 animate-pulse">...</span></>
                    ) : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;