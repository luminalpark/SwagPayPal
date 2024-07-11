import type * as PayPal from 'src/types';
import template from './sw-settings-shipping-detail.html.twig';
import './sw-settings-shipping-detail.scss';

const { Utils } = Shopware;

export default Shopware.Component.wrapComponentConfig({
    template,

    inject: [
        'systemConfigApiService',
    ],

    data() {
        return {
            isPayPalEnabled: true,
        };
    },

    computed: {
        shippingMethodCustomFields(): TEntity<'shipping_method'>['customFields'] | null {
            const shippingMethod = this.shippingMethod as TEntity<'shipping_method'>;

            if (shippingMethod.customFields) {
                return shippingMethod.customFields;
            }

            return Utils.object.get(shippingMethod, 'translated.customFields', null);
        },

        payPalDefaultCarrier: {
            get(): string {
                if (this.shippingMethodCustomFields === null) {
                    return '';
                }

                return this.shippingMethodCustomFields?.swag_paypal_carrier || '';
            },
            set(value: string) {
                Utils.object.set(this.shippingMethod, 'customFields.swag_paypal_carrier', value);
            },
        },
    },

    methods: {
        createdComponent() {
            this.$super('createdComponent');

            this.fetchConfigCredentials();
        },

        fetchConfigCredentials() {
            this.systemConfigApiService
                .getValues('SwagPayPal.settings', null)
                .then((values: PayPal.SystemConfig) => {
                    this.isPayPalEnabled = !!values['SwagPayPal.settings.merchantPayerId']
                        || !!values['SwagPayPal.settings.merchantPayerIdSandbox'];
                });
        },

        /**
         * @deprecated tag:v10.0.0 - Will be removed, use `fetchConfigCredentials` instead.
         */
        async fetchMerchantIntegrations() {
            const merchantInformation = await this.SwagPayPalApiCredentialsService.getMerchantInformation();

            this.isPayPalEnabled = merchantInformation?.merchantIntegrations !== null;
        },
    },
});

