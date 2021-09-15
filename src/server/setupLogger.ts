import * as winston from 'winston'

export function SetupLogger():winston.Logger{
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.json(),
        defaultMeta: { service: "user-service" },
        transports: [
            new winston.transports.File({
                filename: "error.log",
                level: "error",
            }),
            new winston.transports.File({ filename: "combined.log" }),
        ],
    });

    if (process.env.NODE_ENV !== "production") {
        logger.add(
            new winston.transports.Console({
                format: winston.format.simple(),
            })
        );
    }
    return logger;
};

let logger: winston.Logger

export function setupLogger(newLogger: winston.Logger){
    logger = newLogger
}

export function fetchLogger(): winston.Logger{
    return logger
}