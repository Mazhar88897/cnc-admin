import Heading from '@/components/screens/customHeading';
import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="my-12">
      <Heading
        color="black"
        heading1="Privacy"
        heading2="Policy"
        subheading="How we collect, use, and protect your personal data."
      />
      <div>
        <Component />
      </div>
    </div>
  );
};

export default PrivacyPage;

function Component() {
  return (
    <div className="mb-20 my-10 bg-white">
      <div className="px-6 py-8 max-w-4xl mx-auto">
        <div className="space-y-8 text-base font-semibold text-gray-800">
          
          {/* Last Updated */}
          <div className="text-sm text-gray-600 italic">
            <strong>Last Updated:</strong> December 2024
          </div>

          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
            <p className="mb-4">
              Welcome to <strong>Only CNCs</strong>. This Privacy Policy explains how <strong>James Dean Designs Limited</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal data when you use our website, sign up for our services, or subscribe to our newsletter.
            </p>
            <p>
              Your privacy is important to us. By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Information We Collect</h2>
            <p className="mb-4">We collect the following personal data from you:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Name</strong></li>
              <li><strong>Email Address</strong></li>
            </ul>
            <p>We do not collect any sensitive personal data.</p>
          </section>

          {/* Section 3: How We Collect Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. How We Collect Your Information</h2>
            <p className="mb-4">We collect your information directly from you when you:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Sign up for our newsletter.</li>
              <li>Register for an account or any other service on our website.</li>
              <li>Contact us directly via email.</li>
            </ul>
          </section>

          {/* Section 4: How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To send you our newsletter and updates about new content or features on <strong>Only CNCs</strong>.</li>
              <li>To inform you about other CNC-related projects, products, and services from <strong>James Dean Designs Limited</strong> (us).</li>
              <li>To share with our sponsors for marketing and promotional purposes. This is to help us keep our platform free for all users.</li>
              <li>To respond to your inquiries or provide customer support.</li>
            </ul>
          </section>

          {/* Section 5: Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Our Legal Basis for Processing</h2>
            <p className="mb-4">
              Under GDPR, we must have a legal basis for processing your personal data. We rely on your <strong>consent</strong> to process your Name and Email Address. By signing up for our newsletter or services, you are giving us clear consent to use your data for the purposes outlined in this policy.
            </p>
            <p>
              You have the right to withdraw your consent at any time by unsubscribing from our mailing lists.
            </p>
          </section>

          {/* Section 6: Sharing Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Sharing Your Information</h2>
            <p className="mb-4">
              We are committed to keeping your personal data secure. <strong>We will never sell your data to any third party.</strong>
            </p>
            <p className="mb-4">
              We will only share your Name and Email Address with our sponsors for the sole purpose of allowing them to send you marketing materials. Our sponsors are carefully selected and are relevant to the CNC community. They are also required to comply with all applicable data protection laws.
            </p>
            <p>
              You have the right to <strong>opt out</strong> of their mailing lists individually by using the unsubscribe link provided in their emails.
            </p>
          </section>

          {/* Section 7: Data Protection Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Your Data Protection Rights</h2>
            <p className="mb-4">Under GDPR, you have the right to:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification:</strong> Ask us to correct any inaccurate or incomplete data we hold about you.</li>
              <li><strong>Erasure:</strong> Request that we delete your personal data in certain circumstances.</li>
              <li><strong>Restrict Processing:</strong> Request that we limit how we use your data.</li>
              <li><strong>Data Portability:</strong> Ask for your data to be transferred to another organization or directly to you in a machine-readable format.</li>
              <li><strong>Object:</strong> Object to us processing your personal data in certain circumstances.</li>
            </ul>
            <p>
                To exercise any of these rights, please contact us at the email address provided in the &quot;Contact Us&quot; section below.
            </p>
          </section>

          {/* Section 8: Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. Data Security</h2>
            <p>
              We take reasonable and appropriate measures to protect your personal data from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          {/* Section 9: Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. Your continued use of the website after any changes signifies your acceptance of the updated policy.
            </p>
          </section>

          {/* Section 10: Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Email:</strong> [Your Business Email Address]</li>
              <li><strong>Company Name:</strong> James Dean Designs Limited</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
