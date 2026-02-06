import { Section } from '@/components/ui/Section';
import { Network } from 'lucide-react';

export function EcosystemIntegrationsSection() {
  return (
    <Section id="ecosystem" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Network className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ecosystem Integrations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">USDC</div>
            <p className="text-gray-600 dark:text-gray-400">USD Coin</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">XLM</div>
            <p className="text-gray-600 dark:text-gray-400">Stellar</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">PYTH</div>
            <p className="text-gray-600 dark:text-gray-400">Pyth Network</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">LATNIUM</div>
            <p className="text-gray-600 dark:text-gray-400">Latnium</p>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Padmium ensures that industry-leading stablecoins remain liquid, stable, and well-suited for digital transactions through seamless integration with these key ecosystem partners.
          </p>
        </div>
      </div>
    </Section>
  );
}
