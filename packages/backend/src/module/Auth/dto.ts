import { z } from "zod";

export const AUTHENTICATE_USER_DTO = z.object({
	email: z.string().email().min(1),
	password: z.string().min(6),
});

export type AuthenticateUserDto = z.infer<typeof AUTHENTICATE_USER_DTO>;
