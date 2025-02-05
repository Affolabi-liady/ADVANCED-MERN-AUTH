import bcrypt from "bcrypt";

export const hashvalue = async (value: string, saltRounds: number = 10) => 
    await bcrypt.hash(value, saltRounds);

export const comparevalue = async (value: string, hashedValue: string) => 
    await bcrypt.compare(value, hashedValue);

