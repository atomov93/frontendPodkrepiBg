import DonationTab from './DonationTab'
import CertificatesTab from './CertificatesTab'
import PersonalInfoTab from './PersonalInfoTab'

export enum ProfileTabs {
  donations = 'donations',
  personalInformation = 'personal-information',
  certificates = 'certificates',
  contractDonation = 'contract-donation',
}

export type ProfileTab = {
  slug: ProfileTabs
  label: string
  Component: () => React.ReactElement
}

export const tabs: ProfileTab[] = [
  {
    slug: ProfileTabs.donations,
    label: 'Дарения',
    Component: DonationTab,
  },
  {
    slug: ProfileTabs.personalInformation,
    label: 'Лична информация',
    Component: PersonalInfoTab,
  },
  {
    slug: ProfileTabs.certificates,
    label: 'Сертификати',
    Component: CertificatesTab,
  },
  //  Currently we don't generate donation contract, when such document is generated we can either combine it with the certificate or unhide the contracts section.
  // {
  //   slug: ProfileTabs.contractDonation,
  //   label: 'Договор дарение',
  //   Component: DonationAgreementTab,
  // },
]
