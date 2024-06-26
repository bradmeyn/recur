// Correctly initialize the context if you're providing an object to its value
import { createContext, useState } from "react";

import { Frequency } from "@/lib/types/data";

export const FrequencyContext = createContext<Frequency>("monthly");
