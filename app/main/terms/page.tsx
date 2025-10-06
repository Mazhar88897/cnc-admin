import Heading from '@/components/screens/customHeading';
import React from 'react';

const TermsPage = () => {
  return (
    <div className="my-12">
      <Heading
        color="black"
        heading1="Terms and"
        heading2="Conditions"
        subheading="Please read these terms carefully and start using OnlyCNCs."
      />
      <div>
        <Component />
      </div>
    </div>
  );
};

export default TermsPage;

function Component() {
  return (
    <div className="mb-20 my-10 bg-white">
      <div className="px-6 py-8 max-w-4xl mx-auto">
        <div className="space-y-8 text-base font-semibold text-gray-800">
          {/* Last Updated */}
          <div className="text-sm text-gray-600 italic">
            <strong>Last Updated:</strong> 08 September 2025
          </div>
          
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
            <p className="mb-4">
              Welcome to <strong>Only CNCs</strong>, a website owned and operated by <strong>James Dean Designs Limited</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions govern your use of the <strong>Only CNCs</strong> website, including any content, functionality, and services offered on or through the site. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
            </p>
          </section>

          {/* Section 2: Intellectual Property Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Intellectual Property Rights</h2>
            <p>
              All intellectual property rights, including copyrights, trademarks, and other proprietary rights, in and to the website and its content—including text, graphics, logos, and the feeds and speeds data—are owned by <strong>James Dean Designs Limited</strong>. You are granted a limited, non-exclusive, non-transferable license to access and use the website for your personal, non-commercial use only. You may not reproduce, distribute, modify, or create derivative works from any part of the website&quot;s content without our express written permission.
            </p>
          </section>

          {/* Section 3: Use of Feeds and Speeds Data */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. Use of Feeds and Speeds Data</h2>
            <p className="mb-4">
              The feeds and speeds data provided on <strong>Only CNCs</strong> is for informational and guidance purposes only. This data is based on general principles and common practices for desktop CNC machines, but many factors can affect machining results, including machine rigidity, material quality, and tool condition.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Your use of this data is at your own risk. We make no guarantees regarding the accuracy, reliability, or safety of the information provided. We are not responsible for any damage to your machinery, tools, workpieces, or for any personal injury or other issues that may arise from the use of this information. If you have any doubts, do not use the data.
              </li>
            </ul>
          </section>

          {/* Section 4: Disclaimer of Warranties and Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. Disclaimer of Warranties and Limitation of Liability</h2>
            <p className="mb-4">
              The <strong>Only CNCs</strong> website and all information, content, and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we make every effort to ensure the accuracy of our data at the time of publication, information and data may change over time, and we do not warrant that the website will be uninterrupted or error-free.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>James Dean Designs Limited</strong> shall not be liable for any direct, indirect, incidental, consequential, or special damages of any kind, including but not limited to loss of profits, data, or goodwill, arising from your use of, or inability to use, our website or the information contained within it.
              </li>
            </ul>
          </section>

          {/* Section 5: Data and Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Data and Privacy</h2>
            <p className="mb-4">
              By signing up for our newsletter or any services on <strong>Only CNCs</strong>, you agree to the collection and use of your basic personal data, specifically your Name and Email Address.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Purpose:</strong> This data is collected to provide you with updates, to share with our sponsors for marketing purposes, and to inform you about other CNC-related projects, products, and services from <strong>James Dean Designs Limited</strong>. This helps us keep the <strong>Only CNCs</strong> platform free.
              </li>
              <li>
                <strong>Sharing with Sponsors:</strong> Your data may be shared with our sponsors for the sole purpose of allowing them to send you marketing and promotional emails. This data will not be sold or distributed to any other third parties.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can unsubscribe from our mailing list at any time. You can also opt out of sponsor mailing lists individually by using the unsubscribe link provided in their emails.
              </li>
            </ul>
          </section>

          {/* Section 6: General Provisions */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. General Provisions</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Governing Law:</strong> These Terms and Conditions are governed by and construed in accordance with the laws of the <strong>United Kingdom</strong>.
              </li>
              <li>
                <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </li>
              <li>
                <strong>Changes to Terms:</strong> We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the website after such changes constitutes your acceptance of the new Terms.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
