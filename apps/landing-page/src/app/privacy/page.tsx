import React from 'react';
import { Link } from "@heroui/link";

export default function PrivacyPage() {
  return (
    <div
      dir="ltr"
      className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: April 18, 2024</p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-base text-gray-700 mb-4">
            This Privacy Policy describes our policies and procedures on the
            collection, use, and disclosure of your information when you use the
            Service and tells you about your privacy rights and how the law
            protects you.
          </p>
          <p className="text-base text-gray-700 mb-4">
            We use your personal data to provide and improve the Service. By
            using the Service, you agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the{' '}
            <a
              href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Free Privacy Policy Generator
            </a>
            .
          </p>
        </section>

        {/* Interpretation and Definitions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Interpretation and Definitions
          </h2>

          {/* Interpretation */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Interpretation</h3>
            <p className="text-base text-gray-700">
              The words in which the initial letter is capitalized have meanings
              defined under the following conditions. These definitions apply
              regardless of whether they appear in singular or plural form.
            </p>
          </div>

          {/* Definitions */}
          <div>
            <h3 className="text-xl font-medium mb-2">Definitions</h3>
            <p className="text-base text-gray-700 mb-4">
              For the purposes of this Privacy Policy:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Account:</strong> A unique account created for you to
                access our Service or parts of it.
              </li>
              <li>
                <strong>Affiliate:</strong> An entity that controls, is
                controlled by, or is under common control with a party.
              </li>
              <li>
                <strong>Application:</strong> Refers to SPT, the software
                program provided by the Company.
              </li>
              <li>
                <strong>Company:</strong> (referred to as "the Company", "We",
                "Us", or "Our") refers to SPT, Riyadh.
              </li>
              <li>
                <strong>Country:</strong> Refers to Saudi Arabia.
              </li>
              <li>
                <strong>Device:</strong> Any device capable of accessing the
                Service, such as a computer, cellphone, or digital tablet.
              </li>
              <li>
                <strong>Personal Data:</strong> Any information related to an
                identifiable individual.
              </li>
              <li>
                <strong>Service:</strong> Refers to the Application.
              </li>
              <li>
                <strong>Service Provider:</strong> Any natural or legal person
                processing data on behalf of the Company.
              </li>
              <li>
                <strong>Usage Data:</strong> Data collected automatically, such
                as the duration of a page visit.
              </li>
              <li>
                <strong>You:</strong> The individual or legal entity accessing
                or using the Service.
              </li>
            </ul>
          </div>
        </section>

        {/* Collecting and Using Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Collecting and Using Your Personal Data
          </h2>

          {/* Types of Data Collected */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">
              Types of Data Collected
            </h3>

            {/* Personal Data */}
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Personal Data</h4>
              <p className="text-base text-gray-700 mb-2">
                While using our Service, we may ask you to provide personally
                identifiable information, such as:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>
            </div>

            {/* Usage Data */}
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Usage Data</h4>
              <p className="text-base text-gray-700 mb-2">
                Usage Data is collected automatically and may include
                information such as your device's IP address, browser type,
                pages visited, and more.
              </p>
            </div>

            {/* Information Collected While Using the Application */}
            <div>
              <h4 className="text-lg font-medium mb-2">
                Information Collected While Using the Application
              </h4>
              <p className="text-base text-gray-700 mb-2">
                With your prior permission, we may collect location data,
                pictures, and other information from your device's camera and
                photo library to provide features of our Service.
              </p>
            </div>
          </div>
        </section>

        {/* Use of Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Use of Your Personal Data
          </h2>
          <p className="text-base text-gray-700 mb-4">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>To provide and maintain our Service:</strong> Including to
              monitor the usage of our Service.
            </li>
            <li>
              <strong>To manage Your Account:</strong> To manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </li>
            <li>
              <strong>For the performance of a contract:</strong> The
              development, compliance, and undertaking of the purchase contract
              for the products, items, or services You have purchased or of any
              other contract with Us through the Service.
            </li>
            <li>
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application's push notifications
              regarding updates or informative communications related to the
              functionalities, products, or contracted services, including the
              security updates, when necessary or reasonable for their
              implementation.
            </li>
            <li>
              <strong>To provide You:</strong> With news, special offers, and
              general information about other goods, services, and events which
              we offer that are similar to those that you have already purchased
              or enquired about unless You have opted not to receive such
              information.
            </li>
            <li>
              <strong>To manage Your requests:</strong> To attend and manage
              Your requests to Us.
            </li>
            <li>
              <strong>For business transfers:</strong> We may use Your
              information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </li>
            <li>
              <strong>For other purposes:</strong> We may use Your information
              for other purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional
              campaigns, and to evaluate and improve our Service, products,
              services, marketing, and your experience.
            </li>
          </ul>
        </section>

        {/* Sharing Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Sharing Your Personal Data
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We may share Your personal information in the following situations:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>With Service Providers:</strong> We may share Your
              personal information with Service Providers to monitor and analyze
              the use of our Service, to contact You.
            </li>
            <li>
              <strong>For business transfers:</strong> We may share or transfer
              Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or
              acquisition of all or a portion of Our business to another
              company.
            </li>
            <li>
              <strong>With Affiliates:</strong> We may share Your information
              with Our affiliates, in which case we will require those
              affiliates to honor this Privacy Policy. Affiliates include Our
              parent company and any other subsidiaries, joint venture partners,
              or other companies that We control or that are under common
              control with Us.
            </li>
            <li>
              <strong>With business partners:</strong> We may share Your
              information with Our business partners to offer You certain
              products, services, or promotions.
            </li>
            <li>
              <strong>With other users:</strong> When You share personal
              information or otherwise interact in the public areas with other
              users, such information may be viewed by all users and may be
              publicly distributed outside.
            </li>
            <li>
              <strong>With Your consent:</strong> We may disclose Your personal
              information for any other purpose with Your consent.
            </li>
          </ul>
        </section>

        {/* Retention of Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Retention of Your Personal Data
          </h2>
          <p className="text-base text-gray-700 mb-4">
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
        </section>

        {/* Transfer of Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Transfer of Your Personal Data
          </h2>
          <p className="text-base text-gray-700 mb-4">
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country, or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>
        </section>

        {/* Delete Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Delete Your Personal Data
          </h2>
          <p className="text-base text-gray-700 mb-4">
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>
          <p className="text-base text-gray-700 mb-4">
            You may update, amend, or delete Your information at any time by
            signing in to Your Account, if you have one, and visiting the
            account settings section that allows you to manage Your personal
            information. You may also contact Us to request access to, correct,
            or delete any personal information that You have provided to Us.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>
        </section>

        {/* Disclosure of Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Disclosure of Your Personal Data
          </h2>

          {/* Business Transactions */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Business Transactions</h4>
            <p className="text-base text-gray-700 mb-4">
              If the Company is involved in a merger, acquisition, or asset
              sale, Your Personal Data may be transferred. We will provide
              notice before Your Personal Data is transferred and becomes
              subject to a different Privacy Policy.
            </p>
          </div>

          {/* Law enforcement */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Law enforcement</h4>
            <p className="text-base text-gray-700 mb-4">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              a government agency).
            </p>
          </div>

          {/* Other legal requirements */}
          <div>
            <h4 className="text-lg font-medium mb-2">
              Other legal requirements
            </h4>
            <p className="text-base text-gray-700 mb-4">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>
          </div>
        </section>

        {/* Security of Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Security of Your Personal Data
          </h2>
          <p className="text-base text-gray-700 mb-4">
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-base text-gray-700 mb-4">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p className="text-base text-gray-700 mb-4">
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent&apos;s consent before We collect and use that
            information.
          </p>
        </section>

        {/* Links to Other Websites */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Links to Other Websites
          </h2>
          <p className="text-base text-gray-700 mb-4">
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third-party link, You will be
            directed to that third party&apos;s site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </p>
          <p className="text-base text-gray-700 mb-4">
            We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party sites or
            services.
          </p>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to this Privacy Policy
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="text-base text-gray-700 mb-4">
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p className="text-base text-gray-700 mb-4">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-base text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <p>
                By email:{' '}
                <a
                  href="mailto:sptmediaofficail@gmail.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  sptmediaofficail@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>
                By visiting this page on our website:{' '}
                <Link
                  href="https://spt.sa/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://spt.sa/
                </Link>
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
