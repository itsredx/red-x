// ContactPage.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser'; // Import EmailJS

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { name, email, subject, message } = formData; // Extract data from form

            const serviceId = 'service_t8ar89n';  // Replace with your EmailJS service ID
            const templateId = 'template_phfek36'; // Replace with your EmailJS template ID
            const publicKey = '2jE2BgZuzzptLiRoy';  // Replace with your EmailJS public key

            const templateParams = { // Parameters to pass to EmailJS template
                name,
                email,
                subject,
                message,
            };

            if (!serviceId || !templateId || !publicKey) {
                console.error("EmailJS credentials not found in environment variables.");
                toast({
                    title: "Error",
                    description: "Email service configuration is missing. Please contact the administrator.",
                    variant: "destructive",
                });
                setIsSubmitting(false);
                return; // Stop the submission
            }

            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

            console.log('Email sent successfully:', response);

            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: '', message: "" }); // Clear form after successful send
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />

            <main className="pt-24">
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Have a question or want to work together? I'd love to hear from you.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-display font-medium mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-secondary rounded-full p-3 mr-4">
                                            <Mail className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium">Email</h3>
                                            <a
                                                href="mailto:hello@example.com"
                                                className="text-muted-foreground hover:text-blue-500 transition-colors"
                                            >
                                                ambashir02@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-secondary rounded-full p-3 mr-4">
                                            <Phone className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium">Phone</h3>
                                            <p className="text-muted-foreground">
                                                Available by email request
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-secondary rounded-full p-3 mr-4">
                                            <MapPin className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium">Location</h3>
                                            <p className="text-muted-foreground">
                                                Remote - Available Worldwide
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-display font-medium mb-4">
                                    Connect with Me
                                </h3>

                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/itsredx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-secondary rounded-full p-3 text-muted-foreground hover:text-blue-500 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/ahmad-bash-dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-secondary rounded-full p-3 text-muted-foreground hover:text-blue-500 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://x.com/AhmadMBashir2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-secondary rounded-full p-3 text-muted-foreground hover:text-blue-500 transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="bg-card border border-border rounded-2xl p-8">
                                    <h2 className="text-2xl font-display font-medium mb-6">Send a Message</h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background transition-all"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="Project Inquiry">Project Inquiry</option>
                                                <option value="Job Opportunity">Job Opportunity</option>
                                                <option value="Collaboration">Collaboration</option>
                                                <option value="Other">Other</option>
                                            </select>
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
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-6 bg-secondary/30">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-display font-medium mb-6">
                            Looking for a developer for your next project?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            I'm currently available for freelance work and interesting projects.
                            Let's create something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:ambashir02@gmail.com"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
                            >
                                Email Me Directly
                            </a>
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium text-primary border border-primary/50 rounded-full transition-all hover:bg-primary/5"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </motion.div>
    );
};

export default ContactPage;