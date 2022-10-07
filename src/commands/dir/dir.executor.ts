import {CommandExecutor} from "../../core/executor/command.executor";
import {DirInput} from "./dir.types";
import {PromptService} from "../../core/prompt/prompt.service";
import {IStreamLogger} from "../../core/handlers/stream-logger.interface";
import {ICommandExec} from "../../core/executor/command.types";
import {ChildProcessWithoutNullStreams, spawn} from "child_process";
import {DirBuilder} from "./dir.builder";
import {StreamHandler} from "../../core/handlers/stream.handler";

export class DirExecutor extends CommandExecutor<DirInput> {
    private promptService: PromptService = new PromptService();

    constructor(logger: IStreamLogger) {
        super(logger);
    }

    protected build({path}: DirInput): ICommandExec {
        const args = (new DirBuilder()).detailOutput().output();
        return { command: 'ls', args: args.concat(path) };
    }

    protected processStream(stream: ChildProcessWithoutNullStreams, output: IStreamLogger): void {
        const handler = new StreamHandler(output);
        handler.processOutput(stream);
    }

    protected async prompt(): Promise<DirInput> {
        let path = await this.promptService.input<string>('Путь', 'input');
        return { path };
    }

    protected spawn({command: command, args}: ICommandExec): ChildProcessWithoutNullStreams {
        return spawn(command, args);
    }
}