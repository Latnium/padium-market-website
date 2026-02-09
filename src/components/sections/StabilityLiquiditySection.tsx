import { Section } from '@/components/ui/Section';
import { Activity } from 'lucide-react';

export function StabilityLiquiditySection() {
  return (
    <Section id="liquidity">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Activity className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Maintaining Stability and Liquidity
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Proprietary Algorithm for Liquidity
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Padmium&apos;s proprietary algorithm, developed by Padmium Labs, plays a pivotal role in providing on-demand liquidity.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>Dynamically manages orders and achieves superior efficiency in maintaining tight spreads</li>
            <li>Leverages multiple leading price feeds for enhanced reliability and accuracy</li>
            <li>Ensures that industry-leading stablecoins—such as Latnium, USDC, EURC, CADL, JPYL, and others—remain liquid, stable, and well-suited for digital transactions.</li>
          </ul>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-4">
            Tooltip: The algorithm monitors market activity and automatically adjusts orders to maintain balance.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Proprietary Algorithm for Market Balance
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Padmium&apos;s proprietary algorithm adjusts orders to maintain liquidity and balance in the market, ensuring that stablecoins like Latnium and Ladnium remain practical and stable for everyday use.
          </p>
        </div>

        {/* Placeholder for flowchart */}
        <div className="text-center mt-8">
          <div className="inline-block p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-500 dark:text-gray-400 italic">
              [Insert a flowchart: &quot;Market Activity&quot; → &quot;Algorithm Adjustment&quot; → &quot;Balanced Liquidity.&quot;]
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Future Rewards System
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            By supporting stablecoin liquidity, users are rewarded with Latnium, based on the level of participation of circulating stablecoins, thus ensuring the ecosystem remains liquid and functional.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Censorship Resistant
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Padmium is designed to be censorship resistant, ensuring that the ecosystem remains open and accessible to all participants.
          </p>
        </div>
      </div>
    </Section>
  );
}
