import { AppDataSource } from '../utils/data-source'
import { NextFunction, Request, Response } from "express"
import { Feedback } from "../entities/Feedback"

export class FeedbackController {

    private feedbackRepository = AppDataSource.getRepository(Feedback)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.feedbackRepository.find()
    }

    async allFromSingle(request: Request, response: Response, next: NextFunction) {
        const target_nusp_cnpj = request.params.nusp_cnpj
        const company = await this.feedbackRepository.find({
            where: { target_nusp_cnpj }
        })

        if (!company) {
            return "Feedback report not found!"
        }
        return company
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const report = await this.feedbackRepository.findOne({
            where: { id }
        })

        if (!report) {
            return "Feedback report not found!"
        }
        return report
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { author,
                target,
                target_nusp_cnpj,
                author_nusp_cnpj,
                answers,
                comments } = request.body;
        
        const company = Object.assign(new Feedback(), {
            author,
            target,
            target_nusp_cnpj,
            author_nusp_cnpj,
            answers,
            comments
        })

        return this.feedbackRepository.save(company)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        let reportToRemove = await this.feedbackRepository.findOneBy({ id })

        if (!reportToRemove) {
            return "This feedback report does not exist!"
        }

        await this.feedbackRepository.remove(reportToRemove)

        return "Feedback report removed!"
    }

}