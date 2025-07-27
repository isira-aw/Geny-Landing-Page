import React from 'react';

export const Services: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="p-6 text-white bg-transparent">
  <h2 className="text-4xl font-bold mb-4 font-mono">Our Custom-Built IOT Device</h2>
  <p className="mb-4">
    Our custom-built IoT device is the heart of the system. It collects crucial data directly from your generator,
    including metrics like RPM, fuel levels, voltage, temperature, and more. Here’s what sets it apart:
  </p>
  <ul className="list-disc list-inside mb-6 space-y-2">
    <li><strong>Real-Time Data Transmission:</strong> Instantly pushes data to the dashboard within milliseconds for live monitoring.</li>
    <li><strong>Rugged & Waterproof Design:</strong> Engineered for harsh environments with durable, weather-resistant housing.</li>
    <li><strong>Top Build Quality:</strong> Built with high-grade materials to ensure long-term performance and reliability.</li>
    <li><strong>Plug & Play Integration:</strong> Easy to install, flexible to adapt with various generator models.</li>
    <li><strong>Guaranteed Performance:</strong> Backed by strict quality assurance and long-term durability.</li>
  </ul>

  <h2 className="text-4xl font-bold mb-4 font-mono">Interactive Monitoring Dashboard</h2>
  <p className="mb-4">
    Designed with a clean, modern UI, our web-based dashboard transforms raw generator data into intuitive visuals:
  </p>
  <ul className="list-disc list-inside mb-6 space-y-2">
    <li><strong>Live Monitoring:</strong> View RPM, voltage, fuel levels, battery health, and other vital stats in real time.</li>
    <li><strong>AI-Powered Analysis:</strong> Detect anomalies, predict battery wear, and provide intelligent recommendations.</li>
    <li><strong>Remote Control:</strong> Control generator modes like OFF, MAN, AUTO, or TEST directly from the dashboard.</li>
    <li><strong>Smart Alerts:</strong> Get notified instantly about any critical issues or maintenance needs.</li>
    <li><strong>Enterprise-Grade Security:</strong> End-to-end encryption and secure authentication keep your data protected.</li>
  </ul>

  <h2 className="text-4xl font-bold mb-4 font-mono">Advanced AI Integration</h2>
  <p className="mb-4">
    Our system doesn't just monitor—it thinks.
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Predict battery degradation or maintenance cycles.</strong></li>
    <li><strong>Optimize generator performance through machine learning.</strong></li>
    <li><strong>Automatically flag abnormal behavior before it becomes a problem.</strong></li>
  </ul>
</div>

    </div>
  );
};