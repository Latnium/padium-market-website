import { Section } from '@/components/ui/Section';
import { ArrowRightLeft } from 'lucide-react';

export function OnrampsSection() {
  return (
    <Section id="onramps">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <ArrowRightLeft className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Onramps
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Padmium is committed to the development of efficient on- and off-ramp solutions to facilitate seamless fiat-to-stablecoin conversions, deposits, and withdrawals through the fastest and most reliable payment channels tailored to each country&apos;s infrastructure, such as e-transfer, ACH, and other local bank rails.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md text-center">
              <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">E-Transfer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fast Canadian transfers</p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md text-center">
              <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">ACH</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">US bank transfers</p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md text-center">
              <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">Local Rails</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Country-specific methods</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
