import Api from './Api'
import { GlobalStore } from '../store/GlobalStore'

export function verify() {
    return new Promise(async (resolve, reject) => {
        try {
            const auth = await Api.reAuthenticate()
            const company = await Api.service('company').find({ query: { userId: auth.user.id } })
            GlobalStore.user = {}
            if (company.total === 1) {
                GlobalStore.user.company = company.data[0]
            }
            const candidate = await Api.service('candidate').find({ query: { userId: auth.user.id } })
            if (candidate.total === 1) {
                GlobalStore.user.candidate = candidate.data[0]
            }
            console.log('verify', GlobalStore)
            resolve()
        } catch (error) {
            console.log(error)
            GlobalStore.user = undefined
            reject()
        }
    })
}

export function fetchDataCandidate() {
    return new Promise(async (resolve, reject) => {
        try {
            
            const resultExperience = await Api.service('experience').find({ query: { candidateId: GlobalStore.user.candidate.id } })
            const resultCertificate = await Api.service('certificates').find({ query: { candidateId: GlobalStore.user.candidate.id } })
            const resultCompetencie = await Api.service('competencia').find({ query: { candidateId: GlobalStore.user.candidate.id } })

            GlobalStore.user.candidate.experiences = resultExperience.data
            GlobalStore.user.candidate.competences = resultCompetencie.data
            GlobalStore.user.candidate.certificates = resultCertificate.data
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
        console.log(GlobalStore)
    })
}
export function fetchDataCompany() {
    return new Promise(async (resolve, reject) => {
        try {
            
            const resultProposal = await Api.service('proposal').find({ query: { companyId: GlobalStore.user.company.id } })
            GlobalStore.user.company.proposal = resultProposal.data;
           resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
        console.log(GlobalStore)
    })
}