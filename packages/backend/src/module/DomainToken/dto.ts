import { z } from "zod";

export const CREATE_ONE_DOMAIN_TOKEN_DTO = z.object({
	createdBy: z.string().min(1),
	domain: z.string().min(1),
});

export type CreateOneDomainTokenDto = z.infer<typeof CREATE_ONE_DOMAIN_TOKEN_DTO>;

export const DOMAIN_TOKEN_DTO = z.object({
	id: z.string().min(1),
	domain: z.string().min(1),
});

export type DomainTokenDto = z.infer<typeof DOMAIN_TOKEN_DTO>;
