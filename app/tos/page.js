import "../globals.css";
import Footer from "@/components/footer";

export default function Login() {

    const termsText = `
        Last Updated: 2024.12.26.
        
        1. Acceptance of Terms
        
        Welcome to Frameza ("Frameza," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Frameza website and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
        
        2. Eligibility
        
        You must be at least 16 years old to use the Service. By agreeing to these Terms, you represent and warrant to us that you are at least 16 years old.
        
        3. Account Registration
        
        To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to keep your account information updated. You are responsible for maintaining the confidentiality of your password and are solely responsible for all activities that occur under your account. If you believe your account has been compromised, please contact us immediately at info@frameza.net.
        
        4. Account Termination
        
        You may request to terminate your account at any time by contacting us at info@frameza.net. We may suspend or terminate your account if you violate these Terms or engage in any conduct that we, in our sole discretion, believe is harmful to the Service or other users.
        
        5. Service Description
        
        Frameza is an AI-powered video generation service that allows users to create short videos (up to 6 seconds in length) based on text prompts and a starting video frame. Videos are generated in MP4 format and are available for download.
        
        6. Prohibited Content
        
        You are prohibited from using the Service to generate or upload content that:
        
        Depicts non-consensual intimate or sexually explicit content.
        
        Harasses, defames, or impersonates specific individuals without authorization.
        
        Features minors in inappropriate contexts.
        
        Is deliberately misleading or misrepresents facts about real people.
        
        Promotes hate speech, discrimination, or extremism.
        
        Violates any individual's rights of publicity or privacy.
        
        Impersonates government officials, law enforcement, or public institutions.
        
        Infringes on any trademark, copyright, or other intellectual property rights.
        
        Is fraudulent, deceptive, or used for scams.
        
        Violates any applicable local, state, federal, or international law.
        
        Uses real people's likenesses without proper rights/permissions.
        
        Is used for commercial purposes without appropriate licensing.
        
        7. Intellectual Property
        
        You retain all ownership rights to the videos you generate using the Service. However, by inputting content into the Service (including text prompts and starting frames), you grant Frameza a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, and store such content for the purpose of providing the Service and for training and improving our AI models.
        
        8. Payment and Credits
        
        Frameza offers credits for purchase that allow you to generate videos. Payments are processed securely through Stripe, and we accept major credit and debit cards. All sales are final, and refunds will only be issued if you have not used any of your purchased credits.
        
        9. Disclaimer of Warranties
        
        The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Frameza does not warrant that the Service will be uninterrupted, error-free, secure, or free of viruses or other harmful components.
        
        10. Limitation of Liability
        
        To the fullest extent permitted by applicable law, Frameza shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Service; (b) any conduct or content of any third party on the Service; (c) any content obtained from the Service; and (d) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not Frameza has been informed of the possibility of such damage.
        
        11. Indemnification
        
        You agree to indemnify and hold harmless Frameza and its affiliates, officers, agents, and employees from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your use of the Service, your violation of these Terms, or your violation of any rights of another.
        
        12. Privacy
        
        Your privacy is important to us. Please review our separate Privacy Policy, which explains how we collect, use, and share your information.
        
        13. Governing Law and Dispute Resolution
        
        These Terms shall be governed by and construed in accordance with the laws of Hungary, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in Hungary.
        
        14. Changes to Terms
        
        We may modify these Terms from time to time. If we make material changes, we will notify you by email. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Terms.
        
        15. Entire Agreement
        
        These Terms, together with our Privacy Policy, constitute the entire agreement between you and Frameza regarding your use of the Service and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written.
        
        16. Contact Us
        
        If you have any questions about these Terms, please contact us at info@frameza.net.
    `

    const lines = termsText.trim().split('\n');

    return (
        <>
        <h1>Terms of Service</h1>
            <div>
                {lines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        <Footer />
        </>
    )
}