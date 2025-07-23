import React, { useState } from "react";

const ShopperDashboard: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const featured = {
    code: "SAVE10",
    description: "10% off sitewide on orders over $50",
    expires: "July 31, 2025",
    used: 1204,
  };

  const popularCodes = [
    {
      code: "PRIME15",
      description: "15% off for Prime members only",
      expires: "Aug 15",
      status: "Verified",
    },
    {
      code: "FREEDEL",
      description: "Free delivery on orders over $25",
      expires: "Ongoing",
      status: "Verified",
    },
    {
      code: "SUMMER25",
      description: "25% off select summer items",
      expires: "July 30",
      status: "Ending Soon",
    },
  ];

  const categories = ["Electronics", "Fashion", "Books", "Home", "Beauty"];
  const testimonials = [
    { text: "I saved $30 with just one code. Super easy.", name: "Jenny" },
    { text: "The automatic copy button works every time.", name: "Dev" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 text-gray-800">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="text-gray-600 text-base">
          Here are today’s top Amazon promo codes and verified deals.
        </p>
      </div>

      <div className="p-6 rounded-xl shadow-md bg-white space-y-2">
        <h2 className="text-xl font-medium">Featured Code</h2>
        <div className="text-2xl font-bold tracking-wide">{featured.code}</div>
        <p>{featured.description}</p>
        <p className="text-sm text-gray-500">Expires {featured.expires}</p>
        <p className="text-sm text-gray-500">
          Verified today · Used {featured.used.toLocaleString()} times
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => handleCopy(featured.code)}
            className={`px-4 py-2 rounded-lg shadow-sm text-sm ${
              copiedCode === featured.code
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {copiedCode === featured.code ? "Copied" : "Copy Code"}
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm shadow-sm hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-3">Popular Codes</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 font-medium">Code</th>
                <th className="p-3 font-medium">Description</th>
                <th className="p-3 font-medium">Expires</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {popularCodes.map(({ code, description, expires, status }) => (
                <tr key={code} className="border-t">
                  <td className="p-3 font-semibold">{code}</td>
                  <td className="p-3">{description}</td>
                  <td className="p-3">{expires}</td>
                  <td className="p-3">{status}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleCopy(code)}
                      className={`px-3 py-1 rounded-lg mr-2 text-sm ${
                        copiedCode === code
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {copiedCode === code ? "Copied" : "Copy"}
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm shadow-sm hover:bg-blue-700">
                      Shop
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-2">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <div
              key={cat}
              className="px-4 py-2 bg-gray-100 text-sm rounded-lg shadow-sm"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-medium">What Shoppers Are Saying</h2>
        {testimonials.map(({ text, name }, i) => (
          <p key={i} className="text-gray-700 italic">
            "{text}" <span className="not-italic font-medium">– {name}</span>
          </p>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
        <h2 className="text-xl font-medium">Stay in the Loop</h2>
        <p className="text-gray-600 text-sm">
          Sign up to receive alerts for new and exclusive deals.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm w-full sm:w-auto"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopperDashboard;
