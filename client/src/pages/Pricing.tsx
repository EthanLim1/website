import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing for Affiliate Marketers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We only make money when you make money. Our commission-based pricing
            ensures we're aligned with your success.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Commission-Based Pricing
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-4">
                Only a small deposit of $30. No monthly fees. When you earn, our fee
                comes out of your deposit — never from your payout.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Commission Structure */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    How It Works
                  </h3>

                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-orange-600">
                          20–30%
                        </div>
                        <div className="text-lg text-gray-700">
                          Commission Rate (of your affiliate earnings)
                        </div>
                      </div>
                      <p className="text-gray-600 text-center">
                        We deduct our fee from your deposit only after a
                        successful sale. Your payout from the network stays the
                        same.
                      </p>
                    </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        No monthly subscriptions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        Fees apply only to successful sales
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        Fees are taken from your deposit, not your payout
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        Transparent tracking and reporting
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        Access to all premium features
                      </span>
                    </div>
                  </div>
                </div>

                {/* Example Calculation */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Example (Deposit-Funded Fee)
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Sample Affiliate Sale
                    </h4>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Product Price:</span>
                        <span className="font-semibold">$100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Your Affiliate Commission (10%):
                        </span>
                        <span className="font-semibold">$10.00</span>
                      </div>

                      <div className="border-t pt-3 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Our Fee (25% of your commission):
                          </span>
                          <span className="font-semibold text-orange-600">
                            $2.50 (charged to deposit)
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-gray-600">Your Payout:</span>
                          <span className="font-bold text-green-600">$10.00</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Deposit Balance:</span>
                          <span className="font-medium text-gray-900">
                            $30.00 → $27.50
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> The 20–30% rate applies to your
                      affiliate earnings and is deducted from your deposit after
                      each successful sale. If your deposit runs low, we’ll
                      prompt you to top up before the next fee.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready to Start Earning?
                </h3>
                <p className="text-gray-600 mb-6">
                  Download our Chrome extension and start maximizing your
                  affiliate earnings today
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  asChild
                >
                  <a
                    href="https://chromewebstore.google.com/detail/badger-open-beta/knemhfmegoohbpmolimpkhlhnofogdna"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Chrome Extension
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                When do you charge the commission?
              </h3>
              <p className="text-gray-600">
                Only after you receive earnings from a successful affiliate
                sale. We charge the fee to your deposit at that time. Your
                payout stays intact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                How is the commission calculated?
              </h3>
              <p className="text-gray-600">
                As a percentage of your affiliate earnings (not the product
                price). We deduct that amount from your deposit, not from your
                payout.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-600">
                No. There are no setup fees or monthly subscriptions. Your
                deposit only covers commission fees on successful sales and can be refunded at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;