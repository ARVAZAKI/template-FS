import api from '@/api/axios'

export const getPortfolioItems = () => api.get('/portfolio')
export const getPortfolioById = (id) => api.get(`/portfolio/${id}`)
