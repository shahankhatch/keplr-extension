import { MessageManager } from "../../common/message";
import {
  LedgerGetWebHIDFlagMsg,
  LedgerInitResumeMsg,
  LedgerSetWebHIDFlagMsg
} from "./messages";
import { ROUTE } from "./constants";
import { getHandler } from "./handler";
import { LedgerKeeper } from "./keeper";

export function init(
  messageManager: MessageManager,
  keeper: LedgerKeeper
): void {
  messageManager.registerMessage(LedgerInitResumeMsg);
  messageManager.registerMessage(LedgerGetWebHIDFlagMsg);
  messageManager.registerMessage(LedgerSetWebHIDFlagMsg);

  messageManager.addHandler(ROUTE, getHandler(keeper));
}
