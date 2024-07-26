import { config } from "dotenv-safe";
config();

import { AppModule } from "./module/App";

const app = new AppModule();

app.start();
