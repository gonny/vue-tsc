import type { InjectionKey } from "vue";
import type User from "./types/user";

export const userInjectionKey = Symbol() as InjectionKey<User>;
