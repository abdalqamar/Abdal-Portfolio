import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto py-25 px-5">
      <h1 className="text-3xl font-bold mb-3">Terms & Conditions</h1>
      <p className="text-gray-600 mb-6">Last Updated: April 1, 2025</p>

      {/* INTRO */}
      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="text-gray-700 mb-4">
        Welcome to <strong>StudyHub</strong>. By accessing our website,
        purchasing courses, or availing website design and development services,
        you agree to be bound by these Terms and Conditions. If you do not
        agree, please discontinue use of our services immediately.
      </p>

      {/* SERVICES */}
      <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
      <p className="text-gray-700 mb-4">
        StudyHub offers a wide range of digital solutions, including but not
        limited to:
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
        <li>Website Development</li>
        <li>Website Design</li>
        <li>UI/UX Design</li>
        <li>Frontend & Backend Development</li>
        <li>Portfolio Website Development</li>
        <li>Custom Web Applications & Digital Solutions</li>
      </ul>

      <p className="text-gray-700 mb-4">
        We also offer free and paid online courses designed to help learners
        grow their technical and creative skills.
      </p>

      {/* PAYMENTS */}
      <h2 className="text-xl font-semibold mb-2">3. Payment Terms</h2>
      <p className="text-gray-700 mb-4">
        All payments must be completed in advance. Payments for services and
        courses are securely processed through trusted payment gateways such as
        Razorpay.
      </p>

      {/* REFUND POLICY */}
      <h2 className="text-xl font-semibold mb-2">4. Refund Policy</h2>
      <p className="text-gray-700 mb-4">
        StudyHub follows a strict refund policy. Refunds are issued only under
        the following condition:
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>
          <strong>Course Refund:</strong> Refund is only applicable if the
          student did <u>not receive access</u> to the purchased course after
          payment.
        </li>
      </ul>

      <p className="text-gray-700 mb-4">
        We do <strong>not</strong> provide refunds in the following cases:
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>If the student has already received course access.</li>
        <li>If the student simply doesn’t like the course content.</li>
        <li>If the student faces device or internet issues.</li>
        <li>
          If the student downloaded or accessed any part of the course
          materials.
        </li>
        <li>If the student uses incorrect details during signup.</li>
      </ul>

      <p className="text-gray-700 mb-4">
        For service-based work (design/development), refunds are not provided
        once work has started. We encourage clients to clearly evaluate
        requirements before placing orders.
      </p>

      {/* SCOPE OF WORK */}
      <h2 className="text-xl font-semibold mb-2">
        5. Project Scope & Revisions
      </h2>
      <p className="text-gray-700 mb-4">
        For design and development services, StudyHub works based on the agreed
        project scope. Any additional features, pages, or requirements beyond
        the agreement will incur additional charges.
      </p>

      <p className="text-gray-700 mb-4">
        Revisions are included as per the package purchased. Excessive or
        repeated revision requests may require additional payment.
      </p>

      {/* IP */}
      <h2 className="text-xl font-semibold mb-2">
        6. Intellectual Property Rights
      </h2>
      <p className="text-gray-700 mb-4">
        All course content, designs, source code, graphics, videos, and study
        materials are the exclusive property of <strong>StudyHub</strong> unless
        otherwise mentioned.
      </p>

      <p className="text-gray-700 mb-4">You may NOT:</p>

      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>Copy, distribute, or resell course content.</li>
        <li>Record or share lectures, source code, or digital files.</li>
        <li>Republish content without written permission.</li>
      </ul>

      <p className="text-gray-700 mb-4 font-semibold">
        Any unauthorized distribution may lead to permanent account suspension
        and legal consequences under Indian laws.
      </p>

      {/* USER CONDUCT */}
      <h2 className="text-xl font-semibold mb-2">7. User Conduct</h2>
      <p className="text-gray-700 mb-4">Users agree not to:</p>

      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>Share login credentials with others.</li>
        <li>Manipulate, hack, or reverse-engineer our services.</li>
        <li>Submit harmful, abusive, or misleading information.</li>
        <li>Attempt unauthorized access to servers or databases.</li>
      </ul>

      {/* LIABILITY */}
      <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        StudyHub is not liable for any indirect, incidental, or consequential
        damages, including loss of data, business interruption, or device
        malfunction.
      </p>

      {/* TERMINATION */}
      <h2 className="text-xl font-semibold mb-2">9. Account Termination</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to terminate accounts or stop services without
        prior notice if a user violates these Terms or engages in fraudulent or
        harmful activities.
      </p>

      {/* MODIFICATION */}
      <h2 className="text-xl font-semibold mb-2">10. Modifications to Terms</h2>
      <p className="text-gray-700 mb-4">
        StudyHub may update these Terms at any time. Continued use of the
        platform constitutes acceptance of the updated Terms.
      </p>

      {/* GOVERNING */}
      <h2 className="text-xl font-semibold mb-2">
        11. Governing Law & Jurisdiction
      </h2>
      <p className="text-gray-700 mb-4">
        These Terms shall be governed by the laws of India. Any legal disputes
        shall be handled exclusively in the courts of your local jurisdiction.
      </p>

      {/* CONTACT */}
      <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
      <p className="text-gray-700 mb-1">
        If you have any questions or concerns about these Terms, feel free to
        contact us:
      </p>

      <p className="text-gray-800">
        📧 <strong>support@studyhub.com</strong>
      </p>
      <p className="text-gray-800 mt-1">
        📍 StudyHub — India , Jharkhand, Bokaro
      </p>
    </div>
  );
};

export default Terms;
