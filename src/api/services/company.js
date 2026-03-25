import api from '@/api/axios'

export const getCompanyProfile = () => api.get('/company/profile')
export const getTeamMembers = () => api.get('/company/team')
