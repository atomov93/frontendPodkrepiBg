import { useSession } from 'next-auth/react'
import { QueryClient, useQuery } from 'react-query'

import { endpoints } from 'service/apiEndpoints'
import { authQueryFnFactory } from 'service/restRequests'
import {
  CampaignResponse,
  CampaignType,
  AdminCampaignResponse,
  AdminSingleCampaignResponse,
  CampaignDonationHistoryResponse,
} from 'gql/campaigns'
import { DonationStatus } from 'gql/donations.enums'

export function useCampaignList() {
  return useQuery<CampaignResponse[]>(endpoints.campaign.listCampaigns.url)
}

export function useCampaignAdminList() {
  const { data: session } = useSession()
  return useQuery<AdminCampaignResponse[]>(
    endpoints.campaign.listAdminCampaigns.url,
    authQueryFnFactory<AdminCampaignResponse[]>(session?.accessToken),
  )
}

export function useCampaignTypesList() {
  return useQuery<CampaignType[]>(endpoints.campaignTypes.listCampaignTypes.url)
}

export function useViewCampaign(slug: string) {
  return useQuery<{ campaign: CampaignResponse }>(endpoints.campaign.viewCampaign(slug).url)
}

export function useViewCampaignById(id: string) {
  const { data: session } = useSession()
  return useQuery<AdminSingleCampaignResponse>(
    endpoints.campaign.viewCampaignById(id).url,
    authQueryFnFactory<AdminSingleCampaignResponse>(session?.accessToken),
  )
}

export async function prefetchCampaignById(client: QueryClient, id: string, token?: string) {
  await client.prefetchQuery<AdminSingleCampaignResponse>(
    endpoints.campaign.viewCampaignById(id).url,
    authQueryFnFactory<AdminSingleCampaignResponse>(token),
  )
}

export function useCampaignDetailsPage(id: string) {
  const { data: session } = useSession()
  return useQuery<CampaignResponse>(
    endpoints.campaign.viewCampaignById(id).url,
    authQueryFnFactory<CampaignResponse>(session?.accessToken),
  )
}

export function useCampaignDonationHistory(
  campaignId: string,
  pageindex?: number,
  pagesize?: number,
) {
  return useQuery<CampaignDonationHistoryResponse>(
    endpoints.donation.getDonations(campaignId, DonationStatus.succeeded, pageindex, pagesize).url,
  )
}
