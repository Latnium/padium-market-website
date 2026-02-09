import { Section } from '@/components/ui/Section';
import { Gift } from 'lucide-react';

export function LiquidityRewardsSection() {
  return (
    <Section id="rewards" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Gift className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Provide Liquidity with Padmium?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ladnium-Based Rewards
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Padmium rewards users with Ladnium based on a fixed percentage of the circulating supply of stablecoins. This transparent and consistent system offers predictable compensation for liquidity providers.
            </p>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md">
              <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                <span className="font-bold">Key Benefit:</span> Earn stable rewards while helping maintain the liquidity of the ecosystem.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Easy and Transparent Rewards
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Padmium makes it simple to participate in liquidity provision. With easy-to-understand rewards in Latnium, users can help support the ecosystem while earning consistent returns.
            </p>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md">
              <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                <span className="font-bold">Key Benefit:</span> Effortlessly earn rewards while contributing to the ecosystem&apos;s health.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder for rewards symbol */}
        <div className="text-center mt-8">
          <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-500 dark:text-gray-400 italic">
              [Insert rewards symbol: A trophy or gift icon representing rewards.]
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
