import { Router } from "express";
import { authenticateJWT } from "../../common/Strategies/jwt.strategy";
import { mfaController } from "./mfa.module";


const mfaRoutes = Router();

mfaRoutes.get("/setup", authenticateJWT, mfaController.genereateMFASetup);
export default mfaRoutes;