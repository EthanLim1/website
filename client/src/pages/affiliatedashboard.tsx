import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AffiliateDashboard: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const promoCodes = [
    { code: "SAVE10", discount: "10% off", store: "Walmart", link: "https://www.walmart.com" },
    { code: "FREESHIP", discount: "Free Shipping", store: "Target", link: "https://www.target.com" },
    { code: "NEW20", discount: "20% off", store: "Best Buy", link: "https://www.bestbuy.com" },
    { code: "HELLO5", discount: "$5 off", store: "Amazon", link: "https://www.amazon.com" },
  ];

  const activityLog = [
    { date: "2025-07-01", time: "10:00 AM", action: "Click", commission: "$0" },
    { date: "2025-07-01", time: "10:05 AM", action: "Signup", commission: "$0" },
    { date: "2025-07-01", time: "10:30 AM", action: "Sale", commission: "$12" },
    { date: "2025-07-02", time: "11:00 AM", action: "Click", commission: "$0" },
    { date: "2025-07-03", time: "01:15 PM", action: "Signup", commission: "$0" },
    { date: "2025-07-04", time: "02:45 PM", action: "Sale", commission: "$15" },
    { date: "2025-07-05", time: "03:10 PM", action: "Click", commission: "$0" },
    { date: "2025-07-06", time: "04:00 PM", action: "Signup", commission: "$0" },
    { date: "2025-07-07", time: "04:45 PM", action: "Sale", commission: "$18" },
    { date: "2025-07-08", time: "05:00 PM", action: "Click", commission: "$0" },
    { date: "2025-07-09", time: "06:00 PM", action: "Signup", commission: "$0" },
    { date: "2025-07-10", time: "06:30 PM", action: "Sale", commission: "$20" },
    { date: "2025-07-11", time: "07:00 PM", action: "Click", commission: "$0" },
    { date: "2025-07-12", time: "08:00 PM", action: "Signup", commission: "$0" },
    { date: "2025-07-13", time: "08:45 PM", action: "Sale", commission: "$22" },
    { date: "2025-07-14", time: "09:15 PM", action: "Click", commission: "$0" },
    { date: "2025-07-15", time: "09:45 PM", action: "Signup", commission: "$0" },
    { date: "2025-07-16", time: "10:15 PM", action: "Sale", commission: "$25" },
    { date: "2025-07-17", time: "10:30 PM", action: "Click", commission: "$0" },
    { date: "2025-07-18", time: "11:00 PM", action: "Signup", commission: "$0" },
  ];

  const chartData = [{ name: "Performance", Clicks: 1200, Signups: 85, Sales: 23 }];
  const revenueData = [
    { name: "Affiliate Cut", value: 276 },
    { name: "Platform Cut", value: 69 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 py-16 space-y-10">
        <nav className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold">Badger</div>
          <div className="space-x-4 text-sm">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/reports">Reports</Link>
            <Link href="/assets">Assets</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/logout">Logout</Link>
          </div>
        </nav>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back, Maria</h2>
        </div>

        {/* Promo Codes */}
        <Card className="shadow border-0">
          <CardHeader>
            <CardTitle>Your Codes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {promoCodes.map(({ code, discount, store, link }) => (
              <div key={code} className="flex justify-between items-center">
                <div className="text-gray-800">
                  <strong className="text-blue-600">{code}</strong> - {discount} at {" "}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {store}
                  </a>
                </div>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    setCopiedCode(code);
                    setTimeout(() => setCopiedCode(null), 1500);
                  }}
                  variant="outline"
                  className={`text-sm ${copiedCode === code ? "text-green-600 border-green-600" : ""}`}
                >
                  {copiedCode === code ? "Copied" : "Copy Code"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Charts */}
        <Card className="shadow border-0">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Clicks" fill="#6366f1" />
                  <Bar dataKey="Signups" fill="#10b981" />
                  <Bar dataKey="Sales" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, value }) => `${name}: $${value}`}
                  >
                    <Cell fill="#10b981" />
                    <Cell fill="#ef4444" />
                  </Pie>
                  <Tooltip formatter={(value: number) => `$${value}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow border-0">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-1">Date</th>
                  <th className="pb-1">Time</th>
                  <th className="pb-1">Action</th>
                  <th className="pb-1">Commission</th>
                </tr>
              </thead>
              <tbody>
                {activityLog.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.date}</td>
                    <td>{entry.time}</td>
                    <td>{entry.action}</td>
                    <td>{entry.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
