import { FeedbackController } from "./controllers/feedback-controller"

export const Routes = [{
    method: "get",
    route: "/feedback",
    controller: FeedbackController,
    action: "all"
}, {
    method: "get",
    route: "/feedback/:cpf_cnpj",
    controller: FeedbackController,
    action: "allFromSingle"
}, {
    method: "get",
    route: "/feedback/get/:id",
    controller: FeedbackController,
    action: "one"
}, {
    method: "post",
    route: "/feedback",
    controller: FeedbackController,
    action: "save"
}, {
    method: "delete",
    route: "/feedback/:id",
    controller: FeedbackController,
    action: "remove"
}]