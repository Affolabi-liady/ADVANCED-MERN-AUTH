import passport from "passport";
import { setupJwtStrategy } from "../common/Strategies/jwt.strategy";

const intializePassport = () => {
    setupJwtStrategy(passport);
};

intializePassport();

export default passport;