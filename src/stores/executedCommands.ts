import { defineStore } from "pinia";

type CommandsStore = {
  [executedCommand: string]: string[];
};

export const useCommandsStore = defineStore("commands", {
  state: () => ({
    executedCommands: localStorage.getItem("executed-commands"),
  }),
  actions: {
    updateExecutedCommands(newCommand: string) {
      let commands: CommandsStore = {
        executedCommands: [],
      };
      const previousCommands = localStorage.getItem("executed-commands");
      if (previousCommands !== null) {
        const parsedPreviousCommands: CommandsStore =
          JSON.parse(previousCommands);
        commands.executedCommands = parsedPreviousCommands.executedCommands;
        if (!parsedPreviousCommands.executedCommands.includes(newCommand)) {
          commands.executedCommands.push(newCommand);
        }
      } else {
        commands.executedCommands.push(newCommand);
      }

      const stringifiedCommandsObj = JSON.stringify(commands);
      localStorage.setItem("executed-commands", stringifiedCommandsObj);
    },
    deletePreviousCommands() {
      localStorage.removeItem("executed-commands");
    },
  },
});
