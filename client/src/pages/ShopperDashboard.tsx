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
    siteName: "Walmart",
    siteUrl: "https://www.walmart.com",
    siteLogo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
  };

  const popularCodes = [
    {
      code: "PRIME15",
      description: "15% off for Prime members only",
      expires: "Aug 15, 2025",
      status: "Verified",
      siteName: "Amazon",
      siteUrl: "https://www.amazon.com",
      siteLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      code: "F21SAVE20",
      description: "20% off orders over $75",
      expires: "July 28, 2025",
      status: "Verified",
      siteName: "Forever 21",
      siteUrl: "https://www.forever21.com",
      siteLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Forever_21_logo.svg",
    },
    {
      code: "ALIBABA10",
      description: "10% off bulk orders",
      expires: "Aug 5, 2025",
      status: "Ending Soon",
      siteName: "Alibaba",
      siteUrl: "https://www.alibaba.com",
      siteLogo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg",
    },
  ];

  const categories = [
    {
      name: "Electronics",
      examples: ["Laptops", "Headphones", "Smartwatches"],
    },
    {
      name: "Fashion",
      examples: ["Shoes", "Jackets", "Accessories"],
    },
    {
      name: "Books",
      examples: ["Bestsellers", "Textbooks", "Children's Books"],
    },
    {
      name: "Home",
      examples: ["Furniture", "Kitchen", "Storage"],
    },
    {
      name: "Beauty",
      examples: ["Skincare", "Haircare", "Makeup"],
    },
  ];

  const testimonials = [
    { text: "I saved $30 with just one code. Super easy.", name: "Jenny" },
    { text: "The automatic copy button works every time.", name: "Dev" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 text-gray-800">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-gray-600 text-base">
            Here are today’s top Amazon promo codes and verified deals.
          </p>
        </div>
        <img
          src="https://i.imgur.com/ZUwYyAd.png"
          alt="badger piggybank"
          className="w-32 h-32 mt-6 lg:mt-0 object-contain"
        />
      </div>

      <div className="p-6 rounded-xl shadow-md bg-white space-y-2">
        <h2 className="text-xl font-medium">Featured Code</h2>
        <div className="text-2xl font-bold tracking-wide">{featured.code}</div>
        <p>{featured.description}</p>
        <p className="text-sm text-gray-500">Expires {featured.expires}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <img src={featured.siteLogo} alt={featured.siteName} className="h-5" />
          <a href={featured.siteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {featured.siteName}
          </a>
          · Verified today · Used {featured.used.toLocaleString()} times
        </div>
        <div className="mt-4">
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
        </div>
      </div>

      <div className="overflow-x-auto">
        <h2 className="text-xl font-medium mb-3">Popular Codes</h2>
        <table className="min-w-full border-collapse text-sm bg-white shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4 font-medium whitespace-nowrap">Code</th>
              <th className="p-4 font-medium whitespace-nowrap">Description</th>
              <th className="p-4 font-medium whitespace-nowrap">Expires</th>
              <th className="p-4 font-medium whitespace-nowrap">Status</th>
              <th className="p-4 font-medium whitespace-nowrap">Site</th>
              <th className="p-4 font-medium whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {popularCodes.map(({ code, description, expires, status, siteName, siteUrl, siteLogo }) => (
              <tr key={code} className="border-t">
                <td className="p-4 font-semibold whitespace-nowrap">{code}</td>
                <td className="p-4 whitespace-nowrap">{description}</td>
                <td className="p-4 whitespace-nowrap">
                  {status === "Ending Soon" ? `Ends ${expires}` : expires}
                </td>
                <td className="p-4 whitespace-nowrap">{status}</td>
                <td className="p-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img src={siteLogo} alt={siteName} className="h-4" />
                    <a
                      href={siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {siteName}
                    </a>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <button
                    onClick={() => handleCopy(code)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      copiedCode === code
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {copiedCode === code ? "Copied" : "Copy"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-2">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(({ name, examples }) => (
            <button
              key={name}
              className="w-full text-left bg-gray-50 hover:bg-gray-100 p-4 rounded-lg shadow-sm transition"
            >
              <div className="font-medium">{name}</div>
              <div className="text-sm text-gray-600">
                {examples.join(", ")}
              </div>
            </button>
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
