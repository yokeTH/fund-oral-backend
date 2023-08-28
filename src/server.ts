import App from "@/app";
import apiRouter from "@/routes/api.route";

const app = new App([new apiRouter()]);
app.listen();
