import { z } from "zod";

export const COLLECT_ANALYTIC_DATA_DTO = z.object({
	device: z.enum(["desktop", "android", "ios"]),
	os: z.string().min(1),
	domain: z.string().min(1),
	themeChanges: z.number().min(0),
});

export type CollectAnalyticDataDto = z.infer<typeof COLLECT_ANALYTIC_DATA_DTO>;
