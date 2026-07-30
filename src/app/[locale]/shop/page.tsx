import { getTranslations } from 'next-intl/server'

import ArtInquiriesButton from '@/components/ArtInquiriesButton'
import GiftPackCard from '@/components/GiftPackCard'
import PageHeader from '@/components/PageHeader'
import { GIFT_PACKS } from '@/lib/constants'

export default async function ShopPage() {
  const t = await getTranslations('shop')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {GIFT_PACKS.length === 0 ? (
        /* Tienda despublicada — ver src/lib/constants.ts */
        <section className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="font-sans text-lg md:text-xl text-black/70 leading-relaxed italic">
              {t('comingSoon')}
            </p>
            <div className="mt-10">
              <ArtInquiriesButton />
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GIFT_PACKS.map((pack) => (
              <GiftPackCard key={pack.id} pack={pack} variant="default" />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
