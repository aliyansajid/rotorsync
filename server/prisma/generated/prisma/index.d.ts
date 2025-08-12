
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MopekaSensor
 * 
 */
export type MopekaSensor = $Result.DefaultSelection<Prisma.$MopekaSensorPayload>
/**
 * Model BMS
 * 
 */
export type BMS = $Result.DefaultSelection<Prisma.$BMSPayload>
/**
 * Model Raspi
 * 
 */
export type Raspi = $Result.DefaultSelection<Prisma.$RaspiPayload>
/**
 * Model TiltSensor
 * 
 */
export type TiltSensor = $Result.DefaultSelection<Prisma.$TiltSensorPayload>
/**
 * Model SerialNumber
 * 
 */
export type SerialNumber = $Result.DefaultSelection<Prisma.$SerialNumberPayload>
/**
 * Model MqttConfig
 * 
 */
export type MqttConfig = $Result.DefaultSelection<Prisma.$MqttConfigPayload>
/**
 * Model RaspiData
 * 
 */
export type RaspiData = $Result.DefaultSelection<Prisma.$RaspiDataPayload>
/**
 * Model TiltData
 * 
 */
export type TiltData = $Result.DefaultSelection<Prisma.$TiltDataPayload>
/**
 * Model BMSData
 * 
 */
export type BMSData = $Result.DefaultSelection<Prisma.$BMSDataPayload>
/**
 * Model MopekaData
 * 
 */
export type MopekaData = $Result.DefaultSelection<Prisma.$MopekaDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mopekaSensor`: Exposes CRUD operations for the **MopekaSensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MopekaSensors
    * const mopekaSensors = await prisma.mopekaSensor.findMany()
    * ```
    */
  get mopekaSensor(): Prisma.MopekaSensorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bMS`: Exposes CRUD operations for the **BMS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BMS
    * const bMS = await prisma.bMS.findMany()
    * ```
    */
  get bMS(): Prisma.BMSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raspi`: Exposes CRUD operations for the **Raspi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raspis
    * const raspis = await prisma.raspi.findMany()
    * ```
    */
  get raspi(): Prisma.RaspiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiltSensor`: Exposes CRUD operations for the **TiltSensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiltSensors
    * const tiltSensors = await prisma.tiltSensor.findMany()
    * ```
    */
  get tiltSensor(): Prisma.TiltSensorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serialNumber`: Exposes CRUD operations for the **SerialNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SerialNumbers
    * const serialNumbers = await prisma.serialNumber.findMany()
    * ```
    */
  get serialNumber(): Prisma.SerialNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mqttConfig`: Exposes CRUD operations for the **MqttConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MqttConfigs
    * const mqttConfigs = await prisma.mqttConfig.findMany()
    * ```
    */
  get mqttConfig(): Prisma.MqttConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raspiData`: Exposes CRUD operations for the **RaspiData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaspiData
    * const raspiData = await prisma.raspiData.findMany()
    * ```
    */
  get raspiData(): Prisma.RaspiDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiltData`: Exposes CRUD operations for the **TiltData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiltData
    * const tiltData = await prisma.tiltData.findMany()
    * ```
    */
  get tiltData(): Prisma.TiltDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bMSData`: Exposes CRUD operations for the **BMSData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BMSData
    * const bMSData = await prisma.bMSData.findMany()
    * ```
    */
  get bMSData(): Prisma.BMSDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mopekaData`: Exposes CRUD operations for the **MopekaData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MopekaData
    * const mopekaData = await prisma.mopekaData.findMany()
    * ```
    */
  get mopekaData(): Prisma.MopekaDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MopekaSensor: 'MopekaSensor',
    BMS: 'BMS',
    Raspi: 'Raspi',
    TiltSensor: 'TiltSensor',
    SerialNumber: 'SerialNumber',
    MqttConfig: 'MqttConfig',
    RaspiData: 'RaspiData',
    TiltData: 'TiltData',
    BMSData: 'BMSData',
    MopekaData: 'MopekaData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "mopekaSensor" | "bMS" | "raspi" | "tiltSensor" | "serialNumber" | "mqttConfig" | "raspiData" | "tiltData" | "bMSData" | "mopekaData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MopekaSensor: {
        payload: Prisma.$MopekaSensorPayload<ExtArgs>
        fields: Prisma.MopekaSensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MopekaSensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MopekaSensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>
          }
          findFirst: {
            args: Prisma.MopekaSensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MopekaSensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>
          }
          findMany: {
            args: Prisma.MopekaSensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>[]
          }
          create: {
            args: Prisma.MopekaSensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>
          }
          createMany: {
            args: Prisma.MopekaSensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MopekaSensorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>[]
          }
          delete: {
            args: Prisma.MopekaSensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>
          }
          update: {
            args: Prisma.MopekaSensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>
          }
          deleteMany: {
            args: Prisma.MopekaSensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MopekaSensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MopekaSensorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>[]
          }
          upsert: {
            args: Prisma.MopekaSensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaSensorPayload>
          }
          aggregate: {
            args: Prisma.MopekaSensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMopekaSensor>
          }
          groupBy: {
            args: Prisma.MopekaSensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MopekaSensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MopekaSensorCountArgs<ExtArgs>
            result: $Utils.Optional<MopekaSensorCountAggregateOutputType> | number
          }
        }
      }
      BMS: {
        payload: Prisma.$BMSPayload<ExtArgs>
        fields: Prisma.BMSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BMSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BMSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>
          }
          findFirst: {
            args: Prisma.BMSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BMSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>
          }
          findMany: {
            args: Prisma.BMSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>[]
          }
          create: {
            args: Prisma.BMSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>
          }
          createMany: {
            args: Prisma.BMSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BMSCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>[]
          }
          delete: {
            args: Prisma.BMSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>
          }
          update: {
            args: Prisma.BMSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>
          }
          deleteMany: {
            args: Prisma.BMSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BMSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BMSUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>[]
          }
          upsert: {
            args: Prisma.BMSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSPayload>
          }
          aggregate: {
            args: Prisma.BMSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBMS>
          }
          groupBy: {
            args: Prisma.BMSGroupByArgs<ExtArgs>
            result: $Utils.Optional<BMSGroupByOutputType>[]
          }
          count: {
            args: Prisma.BMSCountArgs<ExtArgs>
            result: $Utils.Optional<BMSCountAggregateOutputType> | number
          }
        }
      }
      Raspi: {
        payload: Prisma.$RaspiPayload<ExtArgs>
        fields: Prisma.RaspiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaspiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaspiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>
          }
          findFirst: {
            args: Prisma.RaspiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaspiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>
          }
          findMany: {
            args: Prisma.RaspiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>[]
          }
          create: {
            args: Prisma.RaspiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>
          }
          createMany: {
            args: Prisma.RaspiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaspiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>[]
          }
          delete: {
            args: Prisma.RaspiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>
          }
          update: {
            args: Prisma.RaspiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>
          }
          deleteMany: {
            args: Prisma.RaspiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaspiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaspiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>[]
          }
          upsert: {
            args: Prisma.RaspiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiPayload>
          }
          aggregate: {
            args: Prisma.RaspiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaspi>
          }
          groupBy: {
            args: Prisma.RaspiGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaspiGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaspiCountArgs<ExtArgs>
            result: $Utils.Optional<RaspiCountAggregateOutputType> | number
          }
        }
      }
      TiltSensor: {
        payload: Prisma.$TiltSensorPayload<ExtArgs>
        fields: Prisma.TiltSensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiltSensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiltSensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>
          }
          findFirst: {
            args: Prisma.TiltSensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiltSensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>
          }
          findMany: {
            args: Prisma.TiltSensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>[]
          }
          create: {
            args: Prisma.TiltSensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>
          }
          createMany: {
            args: Prisma.TiltSensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiltSensorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>[]
          }
          delete: {
            args: Prisma.TiltSensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>
          }
          update: {
            args: Prisma.TiltSensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>
          }
          deleteMany: {
            args: Prisma.TiltSensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiltSensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiltSensorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>[]
          }
          upsert: {
            args: Prisma.TiltSensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltSensorPayload>
          }
          aggregate: {
            args: Prisma.TiltSensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiltSensor>
          }
          groupBy: {
            args: Prisma.TiltSensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiltSensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiltSensorCountArgs<ExtArgs>
            result: $Utils.Optional<TiltSensorCountAggregateOutputType> | number
          }
        }
      }
      SerialNumber: {
        payload: Prisma.$SerialNumberPayload<ExtArgs>
        fields: Prisma.SerialNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SerialNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SerialNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>
          }
          findFirst: {
            args: Prisma.SerialNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SerialNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>
          }
          findMany: {
            args: Prisma.SerialNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>[]
          }
          create: {
            args: Prisma.SerialNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>
          }
          createMany: {
            args: Prisma.SerialNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SerialNumberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>[]
          }
          delete: {
            args: Prisma.SerialNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>
          }
          update: {
            args: Prisma.SerialNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>
          }
          deleteMany: {
            args: Prisma.SerialNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SerialNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SerialNumberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>[]
          }
          upsert: {
            args: Prisma.SerialNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerialNumberPayload>
          }
          aggregate: {
            args: Prisma.SerialNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSerialNumber>
          }
          groupBy: {
            args: Prisma.SerialNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SerialNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SerialNumberCountArgs<ExtArgs>
            result: $Utils.Optional<SerialNumberCountAggregateOutputType> | number
          }
        }
      }
      MqttConfig: {
        payload: Prisma.$MqttConfigPayload<ExtArgs>
        fields: Prisma.MqttConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MqttConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MqttConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>
          }
          findFirst: {
            args: Prisma.MqttConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MqttConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>
          }
          findMany: {
            args: Prisma.MqttConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>[]
          }
          create: {
            args: Prisma.MqttConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>
          }
          createMany: {
            args: Prisma.MqttConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MqttConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>[]
          }
          delete: {
            args: Prisma.MqttConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>
          }
          update: {
            args: Prisma.MqttConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>
          }
          deleteMany: {
            args: Prisma.MqttConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MqttConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MqttConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>[]
          }
          upsert: {
            args: Prisma.MqttConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MqttConfigPayload>
          }
          aggregate: {
            args: Prisma.MqttConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMqttConfig>
          }
          groupBy: {
            args: Prisma.MqttConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<MqttConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.MqttConfigCountArgs<ExtArgs>
            result: $Utils.Optional<MqttConfigCountAggregateOutputType> | number
          }
        }
      }
      RaspiData: {
        payload: Prisma.$RaspiDataPayload<ExtArgs>
        fields: Prisma.RaspiDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaspiDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaspiDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>
          }
          findFirst: {
            args: Prisma.RaspiDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaspiDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>
          }
          findMany: {
            args: Prisma.RaspiDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>[]
          }
          create: {
            args: Prisma.RaspiDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>
          }
          createMany: {
            args: Prisma.RaspiDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaspiDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>[]
          }
          delete: {
            args: Prisma.RaspiDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>
          }
          update: {
            args: Prisma.RaspiDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>
          }
          deleteMany: {
            args: Prisma.RaspiDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaspiDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaspiDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>[]
          }
          upsert: {
            args: Prisma.RaspiDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaspiDataPayload>
          }
          aggregate: {
            args: Prisma.RaspiDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaspiData>
          }
          groupBy: {
            args: Prisma.RaspiDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaspiDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaspiDataCountArgs<ExtArgs>
            result: $Utils.Optional<RaspiDataCountAggregateOutputType> | number
          }
        }
      }
      TiltData: {
        payload: Prisma.$TiltDataPayload<ExtArgs>
        fields: Prisma.TiltDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiltDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiltDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>
          }
          findFirst: {
            args: Prisma.TiltDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiltDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>
          }
          findMany: {
            args: Prisma.TiltDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>[]
          }
          create: {
            args: Prisma.TiltDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>
          }
          createMany: {
            args: Prisma.TiltDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiltDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>[]
          }
          delete: {
            args: Prisma.TiltDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>
          }
          update: {
            args: Prisma.TiltDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>
          }
          deleteMany: {
            args: Prisma.TiltDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiltDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiltDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>[]
          }
          upsert: {
            args: Prisma.TiltDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiltDataPayload>
          }
          aggregate: {
            args: Prisma.TiltDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiltData>
          }
          groupBy: {
            args: Prisma.TiltDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiltDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiltDataCountArgs<ExtArgs>
            result: $Utils.Optional<TiltDataCountAggregateOutputType> | number
          }
        }
      }
      BMSData: {
        payload: Prisma.$BMSDataPayload<ExtArgs>
        fields: Prisma.BMSDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BMSDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BMSDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>
          }
          findFirst: {
            args: Prisma.BMSDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BMSDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>
          }
          findMany: {
            args: Prisma.BMSDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>[]
          }
          create: {
            args: Prisma.BMSDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>
          }
          createMany: {
            args: Prisma.BMSDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BMSDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>[]
          }
          delete: {
            args: Prisma.BMSDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>
          }
          update: {
            args: Prisma.BMSDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>
          }
          deleteMany: {
            args: Prisma.BMSDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BMSDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BMSDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>[]
          }
          upsert: {
            args: Prisma.BMSDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BMSDataPayload>
          }
          aggregate: {
            args: Prisma.BMSDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBMSData>
          }
          groupBy: {
            args: Prisma.BMSDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<BMSDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.BMSDataCountArgs<ExtArgs>
            result: $Utils.Optional<BMSDataCountAggregateOutputType> | number
          }
        }
      }
      MopekaData: {
        payload: Prisma.$MopekaDataPayload<ExtArgs>
        fields: Prisma.MopekaDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MopekaDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MopekaDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>
          }
          findFirst: {
            args: Prisma.MopekaDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MopekaDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>
          }
          findMany: {
            args: Prisma.MopekaDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>[]
          }
          create: {
            args: Prisma.MopekaDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>
          }
          createMany: {
            args: Prisma.MopekaDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MopekaDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>[]
          }
          delete: {
            args: Prisma.MopekaDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>
          }
          update: {
            args: Prisma.MopekaDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>
          }
          deleteMany: {
            args: Prisma.MopekaDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MopekaDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MopekaDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>[]
          }
          upsert: {
            args: Prisma.MopekaDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MopekaDataPayload>
          }
          aggregate: {
            args: Prisma.MopekaDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMopekaData>
          }
          groupBy: {
            args: Prisma.MopekaDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MopekaDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MopekaDataCountArgs<ExtArgs>
            result: $Utils.Optional<MopekaDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    mopekaSensor?: MopekaSensorOmit
    bMS?: BMSOmit
    raspi?: RaspiOmit
    tiltSensor?: TiltSensorOmit
    serialNumber?: SerialNumberOmit
    mqttConfig?: MqttConfigOmit
    raspiData?: RaspiDataOmit
    tiltData?: TiltDataOmit
    bMSData?: BMSDataOmit
    mopekaData?: MopekaDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mopekaSensors: number
    bmsSensors: number
    raspiSensors: number
    tiltSensors: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mopekaSensors?: boolean | UserCountOutputTypeCountMopekaSensorsArgs
    bmsSensors?: boolean | UserCountOutputTypeCountBmsSensorsArgs
    raspiSensors?: boolean | UserCountOutputTypeCountRaspiSensorsArgs
    tiltSensors?: boolean | UserCountOutputTypeCountTiltSensorsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMopekaSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MopekaSensorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBmsSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BMSWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRaspiSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaspiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTiltSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiltSensorWhereInput
  }


  /**
   * Count Type MopekaSensorCountOutputType
   */

  export type MopekaSensorCountOutputType = {
    mopekaData: number
  }

  export type MopekaSensorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mopekaData?: boolean | MopekaSensorCountOutputTypeCountMopekaDataArgs
  }

  // Custom InputTypes
  /**
   * MopekaSensorCountOutputType without action
   */
  export type MopekaSensorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensorCountOutputType
     */
    select?: MopekaSensorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MopekaSensorCountOutputType without action
   */
  export type MopekaSensorCountOutputTypeCountMopekaDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MopekaDataWhereInput
  }


  /**
   * Count Type BMSCountOutputType
   */

  export type BMSCountOutputType = {
    bmsData: number
  }

  export type BMSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bmsData?: boolean | BMSCountOutputTypeCountBmsDataArgs
  }

  // Custom InputTypes
  /**
   * BMSCountOutputType without action
   */
  export type BMSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSCountOutputType
     */
    select?: BMSCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BMSCountOutputType without action
   */
  export type BMSCountOutputTypeCountBmsDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BMSDataWhereInput
  }


  /**
   * Count Type RaspiCountOutputType
   */

  export type RaspiCountOutputType = {
    raspiData: number
  }

  export type RaspiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raspiData?: boolean | RaspiCountOutputTypeCountRaspiDataArgs
  }

  // Custom InputTypes
  /**
   * RaspiCountOutputType without action
   */
  export type RaspiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiCountOutputType
     */
    select?: RaspiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaspiCountOutputType without action
   */
  export type RaspiCountOutputTypeCountRaspiDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaspiDataWhereInput
  }


  /**
   * Count Type TiltSensorCountOutputType
   */

  export type TiltSensorCountOutputType = {
    tiltData: number
  }

  export type TiltSensorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiltData?: boolean | TiltSensorCountOutputTypeCountTiltDataArgs
  }

  // Custom InputTypes
  /**
   * TiltSensorCountOutputType without action
   */
  export type TiltSensorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensorCountOutputType
     */
    select?: TiltSensorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiltSensorCountOutputType without action
   */
  export type TiltSensorCountOutputTypeCountTiltDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiltDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mopekaSensors?: boolean | User$mopekaSensorsArgs<ExtArgs>
    bmsSensors?: boolean | User$bmsSensorsArgs<ExtArgs>
    raspiSensors?: boolean | User$raspiSensorsArgs<ExtArgs>
    tiltSensors?: boolean | User$tiltSensorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mopekaSensors?: boolean | User$mopekaSensorsArgs<ExtArgs>
    bmsSensors?: boolean | User$bmsSensorsArgs<ExtArgs>
    raspiSensors?: boolean | User$raspiSensorsArgs<ExtArgs>
    tiltSensors?: boolean | User$tiltSensorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mopekaSensors: Prisma.$MopekaSensorPayload<ExtArgs>[]
      bmsSensors: Prisma.$BMSPayload<ExtArgs>[]
      raspiSensors: Prisma.$RaspiPayload<ExtArgs>[]
      tiltSensors: Prisma.$TiltSensorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mopekaSensors<T extends User$mopekaSensorsArgs<ExtArgs> = {}>(args?: Subset<T, User$mopekaSensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bmsSensors<T extends User$bmsSensorsArgs<ExtArgs> = {}>(args?: Subset<T, User$bmsSensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raspiSensors<T extends User$raspiSensorsArgs<ExtArgs> = {}>(args?: Subset<T, User$raspiSensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tiltSensors<T extends User$tiltSensorsArgs<ExtArgs> = {}>(args?: Subset<T, User$tiltSensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mopekaSensors
   */
  export type User$mopekaSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    where?: MopekaSensorWhereInput
    orderBy?: MopekaSensorOrderByWithRelationInput | MopekaSensorOrderByWithRelationInput[]
    cursor?: MopekaSensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MopekaSensorScalarFieldEnum | MopekaSensorScalarFieldEnum[]
  }

  /**
   * User.bmsSensors
   */
  export type User$bmsSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    where?: BMSWhereInput
    orderBy?: BMSOrderByWithRelationInput | BMSOrderByWithRelationInput[]
    cursor?: BMSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BMSScalarFieldEnum | BMSScalarFieldEnum[]
  }

  /**
   * User.raspiSensors
   */
  export type User$raspiSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    where?: RaspiWhereInput
    orderBy?: RaspiOrderByWithRelationInput | RaspiOrderByWithRelationInput[]
    cursor?: RaspiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaspiScalarFieldEnum | RaspiScalarFieldEnum[]
  }

  /**
   * User.tiltSensors
   */
  export type User$tiltSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    where?: TiltSensorWhereInput
    orderBy?: TiltSensorOrderByWithRelationInput | TiltSensorOrderByWithRelationInput[]
    cursor?: TiltSensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TiltSensorScalarFieldEnum | TiltSensorScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MopekaSensor
   */

  export type AggregateMopekaSensor = {
    _count: MopekaSensorCountAggregateOutputType | null
    _avg: MopekaSensorAvgAggregateOutputType | null
    _sum: MopekaSensorSumAggregateOutputType | null
    _min: MopekaSensorMinAggregateOutputType | null
    _max: MopekaSensorMaxAggregateOutputType | null
  }

  export type MopekaSensorAvgAggregateOutputType = {
    tankSizeGallon: number | null
    tankSizeInch: number | null
    threshold: number | null
    heightOffset: number | null
    calibrationPoints: number | null
  }

  export type MopekaSensorSumAggregateOutputType = {
    tankSizeGallon: number | null
    tankSizeInch: number | null
    threshold: number | null
    heightOffset: number | null
    calibrationPoints: number[]
  }

  export type MopekaSensorMinAggregateOutputType = {
    id: string | null
    name: string | null
    sensorId: string | null
    mqttTopic: string | null
    mediumType: string | null
    tankSizeGallon: number | null
    tankSizeInch: number | null
    threshold: number | null
    heightOffset: number | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MopekaSensorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sensorId: string | null
    mqttTopic: string | null
    mediumType: string | null
    tankSizeGallon: number | null
    tankSizeInch: number | null
    threshold: number | null
    heightOffset: number | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MopekaSensorCountAggregateOutputType = {
    id: number
    name: number
    sensorId: number
    mqttTopic: number
    mediumType: number
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: number
    calibrationPoints: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MopekaSensorAvgAggregateInputType = {
    tankSizeGallon?: true
    tankSizeInch?: true
    threshold?: true
    heightOffset?: true
    calibrationPoints?: true
  }

  export type MopekaSensorSumAggregateInputType = {
    tankSizeGallon?: true
    tankSizeInch?: true
    threshold?: true
    heightOffset?: true
    calibrationPoints?: true
  }

  export type MopekaSensorMinAggregateInputType = {
    id?: true
    name?: true
    sensorId?: true
    mqttTopic?: true
    mediumType?: true
    tankSizeGallon?: true
    tankSizeInch?: true
    threshold?: true
    heightOffset?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MopekaSensorMaxAggregateInputType = {
    id?: true
    name?: true
    sensorId?: true
    mqttTopic?: true
    mediumType?: true
    tankSizeGallon?: true
    tankSizeInch?: true
    threshold?: true
    heightOffset?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MopekaSensorCountAggregateInputType = {
    id?: true
    name?: true
    sensorId?: true
    mqttTopic?: true
    mediumType?: true
    tankSizeGallon?: true
    tankSizeInch?: true
    threshold?: true
    heightOffset?: true
    trailerId?: true
    calibrationPoints?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MopekaSensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MopekaSensor to aggregate.
     */
    where?: MopekaSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaSensors to fetch.
     */
    orderBy?: MopekaSensorOrderByWithRelationInput | MopekaSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MopekaSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaSensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MopekaSensors
    **/
    _count?: true | MopekaSensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MopekaSensorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MopekaSensorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MopekaSensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MopekaSensorMaxAggregateInputType
  }

  export type GetMopekaSensorAggregateType<T extends MopekaSensorAggregateArgs> = {
        [P in keyof T & keyof AggregateMopekaSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMopekaSensor[P]>
      : GetScalarType<T[P], AggregateMopekaSensor[P]>
  }




  export type MopekaSensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MopekaSensorWhereInput
    orderBy?: MopekaSensorOrderByWithAggregationInput | MopekaSensorOrderByWithAggregationInput[]
    by: MopekaSensorScalarFieldEnum[] | MopekaSensorScalarFieldEnum
    having?: MopekaSensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MopekaSensorCountAggregateInputType | true
    _avg?: MopekaSensorAvgAggregateInputType
    _sum?: MopekaSensorSumAggregateInputType
    _min?: MopekaSensorMinAggregateInputType
    _max?: MopekaSensorMaxAggregateInputType
  }

  export type MopekaSensorGroupByOutputType = {
    id: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints: number[]
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: MopekaSensorCountAggregateOutputType | null
    _avg: MopekaSensorAvgAggregateOutputType | null
    _sum: MopekaSensorSumAggregateOutputType | null
    _min: MopekaSensorMinAggregateOutputType | null
    _max: MopekaSensorMaxAggregateOutputType | null
  }

  type GetMopekaSensorGroupByPayload<T extends MopekaSensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MopekaSensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MopekaSensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MopekaSensorGroupByOutputType[P]>
            : GetScalarType<T[P], MopekaSensorGroupByOutputType[P]>
        }
      >
    >


  export type MopekaSensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sensorId?: boolean
    mqttTopic?: boolean
    mediumType?: boolean
    tankSizeGallon?: boolean
    tankSizeInch?: boolean
    threshold?: boolean
    heightOffset?: boolean
    trailerId?: boolean
    calibrationPoints?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    mopekaData?: boolean | MopekaSensor$mopekaDataArgs<ExtArgs>
    _count?: boolean | MopekaSensorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mopekaSensor"]>

  export type MopekaSensorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sensorId?: boolean
    mqttTopic?: boolean
    mediumType?: boolean
    tankSizeGallon?: boolean
    tankSizeInch?: boolean
    threshold?: boolean
    heightOffset?: boolean
    trailerId?: boolean
    calibrationPoints?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mopekaSensor"]>

  export type MopekaSensorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sensorId?: boolean
    mqttTopic?: boolean
    mediumType?: boolean
    tankSizeGallon?: boolean
    tankSizeInch?: boolean
    threshold?: boolean
    heightOffset?: boolean
    trailerId?: boolean
    calibrationPoints?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mopekaSensor"]>

  export type MopekaSensorSelectScalar = {
    id?: boolean
    name?: boolean
    sensorId?: boolean
    mqttTopic?: boolean
    mediumType?: boolean
    tankSizeGallon?: boolean
    tankSizeInch?: boolean
    threshold?: boolean
    heightOffset?: boolean
    trailerId?: boolean
    calibrationPoints?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MopekaSensorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sensorId" | "mqttTopic" | "mediumType" | "tankSizeGallon" | "tankSizeInch" | "threshold" | "heightOffset" | "trailerId" | "calibrationPoints" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["mopekaSensor"]>
  export type MopekaSensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    mopekaData?: boolean | MopekaSensor$mopekaDataArgs<ExtArgs>
    _count?: boolean | MopekaSensorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MopekaSensorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MopekaSensorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MopekaSensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MopekaSensor"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      mopekaData: Prisma.$MopekaDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sensorId: string
      mqttTopic: string
      mediumType: string
      tankSizeGallon: number
      tankSizeInch: number
      threshold: number
      heightOffset: number
      trailerId: string
      calibrationPoints: number[]
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mopekaSensor"]>
    composites: {}
  }

  type MopekaSensorGetPayload<S extends boolean | null | undefined | MopekaSensorDefaultArgs> = $Result.GetResult<Prisma.$MopekaSensorPayload, S>

  type MopekaSensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MopekaSensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MopekaSensorCountAggregateInputType | true
    }

  export interface MopekaSensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MopekaSensor'], meta: { name: 'MopekaSensor' } }
    /**
     * Find zero or one MopekaSensor that matches the filter.
     * @param {MopekaSensorFindUniqueArgs} args - Arguments to find a MopekaSensor
     * @example
     * // Get one MopekaSensor
     * const mopekaSensor = await prisma.mopekaSensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MopekaSensorFindUniqueArgs>(args: SelectSubset<T, MopekaSensorFindUniqueArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MopekaSensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MopekaSensorFindUniqueOrThrowArgs} args - Arguments to find a MopekaSensor
     * @example
     * // Get one MopekaSensor
     * const mopekaSensor = await prisma.mopekaSensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MopekaSensorFindUniqueOrThrowArgs>(args: SelectSubset<T, MopekaSensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MopekaSensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaSensorFindFirstArgs} args - Arguments to find a MopekaSensor
     * @example
     * // Get one MopekaSensor
     * const mopekaSensor = await prisma.mopekaSensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MopekaSensorFindFirstArgs>(args?: SelectSubset<T, MopekaSensorFindFirstArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MopekaSensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaSensorFindFirstOrThrowArgs} args - Arguments to find a MopekaSensor
     * @example
     * // Get one MopekaSensor
     * const mopekaSensor = await prisma.mopekaSensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MopekaSensorFindFirstOrThrowArgs>(args?: SelectSubset<T, MopekaSensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MopekaSensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaSensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MopekaSensors
     * const mopekaSensors = await prisma.mopekaSensor.findMany()
     * 
     * // Get first 10 MopekaSensors
     * const mopekaSensors = await prisma.mopekaSensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mopekaSensorWithIdOnly = await prisma.mopekaSensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MopekaSensorFindManyArgs>(args?: SelectSubset<T, MopekaSensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MopekaSensor.
     * @param {MopekaSensorCreateArgs} args - Arguments to create a MopekaSensor.
     * @example
     * // Create one MopekaSensor
     * const MopekaSensor = await prisma.mopekaSensor.create({
     *   data: {
     *     // ... data to create a MopekaSensor
     *   }
     * })
     * 
     */
    create<T extends MopekaSensorCreateArgs>(args: SelectSubset<T, MopekaSensorCreateArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MopekaSensors.
     * @param {MopekaSensorCreateManyArgs} args - Arguments to create many MopekaSensors.
     * @example
     * // Create many MopekaSensors
     * const mopekaSensor = await prisma.mopekaSensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MopekaSensorCreateManyArgs>(args?: SelectSubset<T, MopekaSensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MopekaSensors and returns the data saved in the database.
     * @param {MopekaSensorCreateManyAndReturnArgs} args - Arguments to create many MopekaSensors.
     * @example
     * // Create many MopekaSensors
     * const mopekaSensor = await prisma.mopekaSensor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MopekaSensors and only return the `id`
     * const mopekaSensorWithIdOnly = await prisma.mopekaSensor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MopekaSensorCreateManyAndReturnArgs>(args?: SelectSubset<T, MopekaSensorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MopekaSensor.
     * @param {MopekaSensorDeleteArgs} args - Arguments to delete one MopekaSensor.
     * @example
     * // Delete one MopekaSensor
     * const MopekaSensor = await prisma.mopekaSensor.delete({
     *   where: {
     *     // ... filter to delete one MopekaSensor
     *   }
     * })
     * 
     */
    delete<T extends MopekaSensorDeleteArgs>(args: SelectSubset<T, MopekaSensorDeleteArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MopekaSensor.
     * @param {MopekaSensorUpdateArgs} args - Arguments to update one MopekaSensor.
     * @example
     * // Update one MopekaSensor
     * const mopekaSensor = await prisma.mopekaSensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MopekaSensorUpdateArgs>(args: SelectSubset<T, MopekaSensorUpdateArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MopekaSensors.
     * @param {MopekaSensorDeleteManyArgs} args - Arguments to filter MopekaSensors to delete.
     * @example
     * // Delete a few MopekaSensors
     * const { count } = await prisma.mopekaSensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MopekaSensorDeleteManyArgs>(args?: SelectSubset<T, MopekaSensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MopekaSensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaSensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MopekaSensors
     * const mopekaSensor = await prisma.mopekaSensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MopekaSensorUpdateManyArgs>(args: SelectSubset<T, MopekaSensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MopekaSensors and returns the data updated in the database.
     * @param {MopekaSensorUpdateManyAndReturnArgs} args - Arguments to update many MopekaSensors.
     * @example
     * // Update many MopekaSensors
     * const mopekaSensor = await prisma.mopekaSensor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MopekaSensors and only return the `id`
     * const mopekaSensorWithIdOnly = await prisma.mopekaSensor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MopekaSensorUpdateManyAndReturnArgs>(args: SelectSubset<T, MopekaSensorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MopekaSensor.
     * @param {MopekaSensorUpsertArgs} args - Arguments to update or create a MopekaSensor.
     * @example
     * // Update or create a MopekaSensor
     * const mopekaSensor = await prisma.mopekaSensor.upsert({
     *   create: {
     *     // ... data to create a MopekaSensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MopekaSensor we want to update
     *   }
     * })
     */
    upsert<T extends MopekaSensorUpsertArgs>(args: SelectSubset<T, MopekaSensorUpsertArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MopekaSensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaSensorCountArgs} args - Arguments to filter MopekaSensors to count.
     * @example
     * // Count the number of MopekaSensors
     * const count = await prisma.mopekaSensor.count({
     *   where: {
     *     // ... the filter for the MopekaSensors we want to count
     *   }
     * })
    **/
    count<T extends MopekaSensorCountArgs>(
      args?: Subset<T, MopekaSensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MopekaSensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MopekaSensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaSensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MopekaSensorAggregateArgs>(args: Subset<T, MopekaSensorAggregateArgs>): Prisma.PrismaPromise<GetMopekaSensorAggregateType<T>>

    /**
     * Group by MopekaSensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaSensorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MopekaSensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MopekaSensorGroupByArgs['orderBy'] }
        : { orderBy?: MopekaSensorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MopekaSensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMopekaSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MopekaSensor model
   */
  readonly fields: MopekaSensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MopekaSensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MopekaSensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mopekaData<T extends MopekaSensor$mopekaDataArgs<ExtArgs> = {}>(args?: Subset<T, MopekaSensor$mopekaDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MopekaSensor model
   */
  interface MopekaSensorFieldRefs {
    readonly id: FieldRef<"MopekaSensor", 'String'>
    readonly name: FieldRef<"MopekaSensor", 'String'>
    readonly sensorId: FieldRef<"MopekaSensor", 'String'>
    readonly mqttTopic: FieldRef<"MopekaSensor", 'String'>
    readonly mediumType: FieldRef<"MopekaSensor", 'String'>
    readonly tankSizeGallon: FieldRef<"MopekaSensor", 'Float'>
    readonly tankSizeInch: FieldRef<"MopekaSensor", 'Float'>
    readonly threshold: FieldRef<"MopekaSensor", 'Float'>
    readonly heightOffset: FieldRef<"MopekaSensor", 'Float'>
    readonly trailerId: FieldRef<"MopekaSensor", 'String'>
    readonly calibrationPoints: FieldRef<"MopekaSensor", 'Float[]'>
    readonly createdBy: FieldRef<"MopekaSensor", 'String'>
    readonly createdAt: FieldRef<"MopekaSensor", 'DateTime'>
    readonly updatedAt: FieldRef<"MopekaSensor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MopekaSensor findUnique
   */
  export type MopekaSensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * Filter, which MopekaSensor to fetch.
     */
    where: MopekaSensorWhereUniqueInput
  }

  /**
   * MopekaSensor findUniqueOrThrow
   */
  export type MopekaSensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * Filter, which MopekaSensor to fetch.
     */
    where: MopekaSensorWhereUniqueInput
  }

  /**
   * MopekaSensor findFirst
   */
  export type MopekaSensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * Filter, which MopekaSensor to fetch.
     */
    where?: MopekaSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaSensors to fetch.
     */
    orderBy?: MopekaSensorOrderByWithRelationInput | MopekaSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MopekaSensors.
     */
    cursor?: MopekaSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaSensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MopekaSensors.
     */
    distinct?: MopekaSensorScalarFieldEnum | MopekaSensorScalarFieldEnum[]
  }

  /**
   * MopekaSensor findFirstOrThrow
   */
  export type MopekaSensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * Filter, which MopekaSensor to fetch.
     */
    where?: MopekaSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaSensors to fetch.
     */
    orderBy?: MopekaSensorOrderByWithRelationInput | MopekaSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MopekaSensors.
     */
    cursor?: MopekaSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaSensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MopekaSensors.
     */
    distinct?: MopekaSensorScalarFieldEnum | MopekaSensorScalarFieldEnum[]
  }

  /**
   * MopekaSensor findMany
   */
  export type MopekaSensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * Filter, which MopekaSensors to fetch.
     */
    where?: MopekaSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaSensors to fetch.
     */
    orderBy?: MopekaSensorOrderByWithRelationInput | MopekaSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MopekaSensors.
     */
    cursor?: MopekaSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaSensors.
     */
    skip?: number
    distinct?: MopekaSensorScalarFieldEnum | MopekaSensorScalarFieldEnum[]
  }

  /**
   * MopekaSensor create
   */
  export type MopekaSensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * The data needed to create a MopekaSensor.
     */
    data: XOR<MopekaSensorCreateInput, MopekaSensorUncheckedCreateInput>
  }

  /**
   * MopekaSensor createMany
   */
  export type MopekaSensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MopekaSensors.
     */
    data: MopekaSensorCreateManyInput | MopekaSensorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MopekaSensor createManyAndReturn
   */
  export type MopekaSensorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * The data used to create many MopekaSensors.
     */
    data: MopekaSensorCreateManyInput | MopekaSensorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MopekaSensor update
   */
  export type MopekaSensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * The data needed to update a MopekaSensor.
     */
    data: XOR<MopekaSensorUpdateInput, MopekaSensorUncheckedUpdateInput>
    /**
     * Choose, which MopekaSensor to update.
     */
    where: MopekaSensorWhereUniqueInput
  }

  /**
   * MopekaSensor updateMany
   */
  export type MopekaSensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MopekaSensors.
     */
    data: XOR<MopekaSensorUpdateManyMutationInput, MopekaSensorUncheckedUpdateManyInput>
    /**
     * Filter which MopekaSensors to update
     */
    where?: MopekaSensorWhereInput
    /**
     * Limit how many MopekaSensors to update.
     */
    limit?: number
  }

  /**
   * MopekaSensor updateManyAndReturn
   */
  export type MopekaSensorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * The data used to update MopekaSensors.
     */
    data: XOR<MopekaSensorUpdateManyMutationInput, MopekaSensorUncheckedUpdateManyInput>
    /**
     * Filter which MopekaSensors to update
     */
    where?: MopekaSensorWhereInput
    /**
     * Limit how many MopekaSensors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MopekaSensor upsert
   */
  export type MopekaSensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * The filter to search for the MopekaSensor to update in case it exists.
     */
    where: MopekaSensorWhereUniqueInput
    /**
     * In case the MopekaSensor found by the `where` argument doesn't exist, create a new MopekaSensor with this data.
     */
    create: XOR<MopekaSensorCreateInput, MopekaSensorUncheckedCreateInput>
    /**
     * In case the MopekaSensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MopekaSensorUpdateInput, MopekaSensorUncheckedUpdateInput>
  }

  /**
   * MopekaSensor delete
   */
  export type MopekaSensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
    /**
     * Filter which MopekaSensor to delete.
     */
    where: MopekaSensorWhereUniqueInput
  }

  /**
   * MopekaSensor deleteMany
   */
  export type MopekaSensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MopekaSensors to delete
     */
    where?: MopekaSensorWhereInput
    /**
     * Limit how many MopekaSensors to delete.
     */
    limit?: number
  }

  /**
   * MopekaSensor.mopekaData
   */
  export type MopekaSensor$mopekaDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    where?: MopekaDataWhereInput
    orderBy?: MopekaDataOrderByWithRelationInput | MopekaDataOrderByWithRelationInput[]
    cursor?: MopekaDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MopekaDataScalarFieldEnum | MopekaDataScalarFieldEnum[]
  }

  /**
   * MopekaSensor without action
   */
  export type MopekaSensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaSensor
     */
    select?: MopekaSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaSensor
     */
    omit?: MopekaSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaSensorInclude<ExtArgs> | null
  }


  /**
   * Model BMS
   */

  export type AggregateBMS = {
    _count: BMSCountAggregateOutputType | null
    _avg: BMSAvgAggregateOutputType | null
    _sum: BMSSumAggregateOutputType | null
    _min: BMSMinAggregateOutputType | null
    _max: BMSMaxAggregateOutputType | null
  }

  export type BMSAvgAggregateOutputType = {
    threshold: number | null
  }

  export type BMSSumAggregateOutputType = {
    threshold: number | null
  }

  export type BMSMinAggregateOutputType = {
    id: string | null
    name: string | null
    deviceName: string | null
    mqttTopic: string | null
    threshold: number | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BMSMaxAggregateOutputType = {
    id: string | null
    name: string | null
    deviceName: string | null
    mqttTopic: string | null
    threshold: number | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BMSCountAggregateOutputType = {
    id: number
    name: number
    deviceName: number
    mqttTopic: number
    threshold: number
    trailerId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BMSAvgAggregateInputType = {
    threshold?: true
  }

  export type BMSSumAggregateInputType = {
    threshold?: true
  }

  export type BMSMinAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    threshold?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BMSMaxAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    threshold?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BMSCountAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    threshold?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BMSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BMS to aggregate.
     */
    where?: BMSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMS to fetch.
     */
    orderBy?: BMSOrderByWithRelationInput | BMSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BMSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BMS
    **/
    _count?: true | BMSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BMSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BMSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BMSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BMSMaxAggregateInputType
  }

  export type GetBMSAggregateType<T extends BMSAggregateArgs> = {
        [P in keyof T & keyof AggregateBMS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBMS[P]>
      : GetScalarType<T[P], AggregateBMS[P]>
  }




  export type BMSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BMSWhereInput
    orderBy?: BMSOrderByWithAggregationInput | BMSOrderByWithAggregationInput[]
    by: BMSScalarFieldEnum[] | BMSScalarFieldEnum
    having?: BMSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BMSCountAggregateInputType | true
    _avg?: BMSAvgAggregateInputType
    _sum?: BMSSumAggregateInputType
    _min?: BMSMinAggregateInputType
    _max?: BMSMaxAggregateInputType
  }

  export type BMSGroupByOutputType = {
    id: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: BMSCountAggregateOutputType | null
    _avg: BMSAvgAggregateOutputType | null
    _sum: BMSSumAggregateOutputType | null
    _min: BMSMinAggregateOutputType | null
    _max: BMSMaxAggregateOutputType | null
  }

  type GetBMSGroupByPayload<T extends BMSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BMSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BMSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BMSGroupByOutputType[P]>
            : GetScalarType<T[P], BMSGroupByOutputType[P]>
        }
      >
    >


  export type BMSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    threshold?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    bmsData?: boolean | BMS$bmsDataArgs<ExtArgs>
    _count?: boolean | BMSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bMS"]>

  export type BMSSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    threshold?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bMS"]>

  export type BMSSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    threshold?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bMS"]>

  export type BMSSelectScalar = {
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    threshold?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BMSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deviceName" | "mqttTopic" | "threshold" | "trailerId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["bMS"]>
  export type BMSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    bmsData?: boolean | BMS$bmsDataArgs<ExtArgs>
    _count?: boolean | BMSCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BMSIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BMSIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BMSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BMS"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      bmsData: Prisma.$BMSDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      deviceName: string
      mqttTopic: string
      threshold: number
      trailerId: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bMS"]>
    composites: {}
  }

  type BMSGetPayload<S extends boolean | null | undefined | BMSDefaultArgs> = $Result.GetResult<Prisma.$BMSPayload, S>

  type BMSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BMSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BMSCountAggregateInputType | true
    }

  export interface BMSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BMS'], meta: { name: 'BMS' } }
    /**
     * Find zero or one BMS that matches the filter.
     * @param {BMSFindUniqueArgs} args - Arguments to find a BMS
     * @example
     * // Get one BMS
     * const bMS = await prisma.bMS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BMSFindUniqueArgs>(args: SelectSubset<T, BMSFindUniqueArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BMS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BMSFindUniqueOrThrowArgs} args - Arguments to find a BMS
     * @example
     * // Get one BMS
     * const bMS = await prisma.bMS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BMSFindUniqueOrThrowArgs>(args: SelectSubset<T, BMSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSFindFirstArgs} args - Arguments to find a BMS
     * @example
     * // Get one BMS
     * const bMS = await prisma.bMS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BMSFindFirstArgs>(args?: SelectSubset<T, BMSFindFirstArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BMS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSFindFirstOrThrowArgs} args - Arguments to find a BMS
     * @example
     * // Get one BMS
     * const bMS = await prisma.bMS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BMSFindFirstOrThrowArgs>(args?: SelectSubset<T, BMSFindFirstOrThrowArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BMS
     * const bMS = await prisma.bMS.findMany()
     * 
     * // Get first 10 BMS
     * const bMS = await prisma.bMS.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bMSWithIdOnly = await prisma.bMS.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BMSFindManyArgs>(args?: SelectSubset<T, BMSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BMS.
     * @param {BMSCreateArgs} args - Arguments to create a BMS.
     * @example
     * // Create one BMS
     * const BMS = await prisma.bMS.create({
     *   data: {
     *     // ... data to create a BMS
     *   }
     * })
     * 
     */
    create<T extends BMSCreateArgs>(args: SelectSubset<T, BMSCreateArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BMS.
     * @param {BMSCreateManyArgs} args - Arguments to create many BMS.
     * @example
     * // Create many BMS
     * const bMS = await prisma.bMS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BMSCreateManyArgs>(args?: SelectSubset<T, BMSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BMS and returns the data saved in the database.
     * @param {BMSCreateManyAndReturnArgs} args - Arguments to create many BMS.
     * @example
     * // Create many BMS
     * const bMS = await prisma.bMS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BMS and only return the `id`
     * const bMSWithIdOnly = await prisma.bMS.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BMSCreateManyAndReturnArgs>(args?: SelectSubset<T, BMSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BMS.
     * @param {BMSDeleteArgs} args - Arguments to delete one BMS.
     * @example
     * // Delete one BMS
     * const BMS = await prisma.bMS.delete({
     *   where: {
     *     // ... filter to delete one BMS
     *   }
     * })
     * 
     */
    delete<T extends BMSDeleteArgs>(args: SelectSubset<T, BMSDeleteArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BMS.
     * @param {BMSUpdateArgs} args - Arguments to update one BMS.
     * @example
     * // Update one BMS
     * const bMS = await prisma.bMS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BMSUpdateArgs>(args: SelectSubset<T, BMSUpdateArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BMS.
     * @param {BMSDeleteManyArgs} args - Arguments to filter BMS to delete.
     * @example
     * // Delete a few BMS
     * const { count } = await prisma.bMS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BMSDeleteManyArgs>(args?: SelectSubset<T, BMSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BMS
     * const bMS = await prisma.bMS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BMSUpdateManyArgs>(args: SelectSubset<T, BMSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BMS and returns the data updated in the database.
     * @param {BMSUpdateManyAndReturnArgs} args - Arguments to update many BMS.
     * @example
     * // Update many BMS
     * const bMS = await prisma.bMS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BMS and only return the `id`
     * const bMSWithIdOnly = await prisma.bMS.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BMSUpdateManyAndReturnArgs>(args: SelectSubset<T, BMSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BMS.
     * @param {BMSUpsertArgs} args - Arguments to update or create a BMS.
     * @example
     * // Update or create a BMS
     * const bMS = await prisma.bMS.upsert({
     *   create: {
     *     // ... data to create a BMS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BMS we want to update
     *   }
     * })
     */
    upsert<T extends BMSUpsertArgs>(args: SelectSubset<T, BMSUpsertArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSCountArgs} args - Arguments to filter BMS to count.
     * @example
     * // Count the number of BMS
     * const count = await prisma.bMS.count({
     *   where: {
     *     // ... the filter for the BMS we want to count
     *   }
     * })
    **/
    count<T extends BMSCountArgs>(
      args?: Subset<T, BMSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BMSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BMSAggregateArgs>(args: Subset<T, BMSAggregateArgs>): Prisma.PrismaPromise<GetBMSAggregateType<T>>

    /**
     * Group by BMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BMSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BMSGroupByArgs['orderBy'] }
        : { orderBy?: BMSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BMSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBMSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BMS model
   */
  readonly fields: BMSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BMS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BMSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bmsData<T extends BMS$bmsDataArgs<ExtArgs> = {}>(args?: Subset<T, BMS$bmsDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BMS model
   */
  interface BMSFieldRefs {
    readonly id: FieldRef<"BMS", 'String'>
    readonly name: FieldRef<"BMS", 'String'>
    readonly deviceName: FieldRef<"BMS", 'String'>
    readonly mqttTopic: FieldRef<"BMS", 'String'>
    readonly threshold: FieldRef<"BMS", 'Float'>
    readonly trailerId: FieldRef<"BMS", 'String'>
    readonly createdBy: FieldRef<"BMS", 'String'>
    readonly createdAt: FieldRef<"BMS", 'DateTime'>
    readonly updatedAt: FieldRef<"BMS", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BMS findUnique
   */
  export type BMSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * Filter, which BMS to fetch.
     */
    where: BMSWhereUniqueInput
  }

  /**
   * BMS findUniqueOrThrow
   */
  export type BMSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * Filter, which BMS to fetch.
     */
    where: BMSWhereUniqueInput
  }

  /**
   * BMS findFirst
   */
  export type BMSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * Filter, which BMS to fetch.
     */
    where?: BMSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMS to fetch.
     */
    orderBy?: BMSOrderByWithRelationInput | BMSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BMS.
     */
    cursor?: BMSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BMS.
     */
    distinct?: BMSScalarFieldEnum | BMSScalarFieldEnum[]
  }

  /**
   * BMS findFirstOrThrow
   */
  export type BMSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * Filter, which BMS to fetch.
     */
    where?: BMSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMS to fetch.
     */
    orderBy?: BMSOrderByWithRelationInput | BMSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BMS.
     */
    cursor?: BMSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BMS.
     */
    distinct?: BMSScalarFieldEnum | BMSScalarFieldEnum[]
  }

  /**
   * BMS findMany
   */
  export type BMSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * Filter, which BMS to fetch.
     */
    where?: BMSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMS to fetch.
     */
    orderBy?: BMSOrderByWithRelationInput | BMSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BMS.
     */
    cursor?: BMSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMS.
     */
    skip?: number
    distinct?: BMSScalarFieldEnum | BMSScalarFieldEnum[]
  }

  /**
   * BMS create
   */
  export type BMSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * The data needed to create a BMS.
     */
    data: XOR<BMSCreateInput, BMSUncheckedCreateInput>
  }

  /**
   * BMS createMany
   */
  export type BMSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BMS.
     */
    data: BMSCreateManyInput | BMSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BMS createManyAndReturn
   */
  export type BMSCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * The data used to create many BMS.
     */
    data: BMSCreateManyInput | BMSCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BMS update
   */
  export type BMSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * The data needed to update a BMS.
     */
    data: XOR<BMSUpdateInput, BMSUncheckedUpdateInput>
    /**
     * Choose, which BMS to update.
     */
    where: BMSWhereUniqueInput
  }

  /**
   * BMS updateMany
   */
  export type BMSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BMS.
     */
    data: XOR<BMSUpdateManyMutationInput, BMSUncheckedUpdateManyInput>
    /**
     * Filter which BMS to update
     */
    where?: BMSWhereInput
    /**
     * Limit how many BMS to update.
     */
    limit?: number
  }

  /**
   * BMS updateManyAndReturn
   */
  export type BMSUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * The data used to update BMS.
     */
    data: XOR<BMSUpdateManyMutationInput, BMSUncheckedUpdateManyInput>
    /**
     * Filter which BMS to update
     */
    where?: BMSWhereInput
    /**
     * Limit how many BMS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BMS upsert
   */
  export type BMSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * The filter to search for the BMS to update in case it exists.
     */
    where: BMSWhereUniqueInput
    /**
     * In case the BMS found by the `where` argument doesn't exist, create a new BMS with this data.
     */
    create: XOR<BMSCreateInput, BMSUncheckedCreateInput>
    /**
     * In case the BMS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BMSUpdateInput, BMSUncheckedUpdateInput>
  }

  /**
   * BMS delete
   */
  export type BMSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
    /**
     * Filter which BMS to delete.
     */
    where: BMSWhereUniqueInput
  }

  /**
   * BMS deleteMany
   */
  export type BMSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BMS to delete
     */
    where?: BMSWhereInput
    /**
     * Limit how many BMS to delete.
     */
    limit?: number
  }

  /**
   * BMS.bmsData
   */
  export type BMS$bmsDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    where?: BMSDataWhereInput
    orderBy?: BMSDataOrderByWithRelationInput | BMSDataOrderByWithRelationInput[]
    cursor?: BMSDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BMSDataScalarFieldEnum | BMSDataScalarFieldEnum[]
  }

  /**
   * BMS without action
   */
  export type BMSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMS
     */
    select?: BMSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMS
     */
    omit?: BMSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSInclude<ExtArgs> | null
  }


  /**
   * Model Raspi
   */

  export type AggregateRaspi = {
    _count: RaspiCountAggregateOutputType | null
    _min: RaspiMinAggregateOutputType | null
    _max: RaspiMaxAggregateOutputType | null
  }

  export type RaspiMinAggregateOutputType = {
    id: string | null
    name: string | null
    deviceName: string | null
    mqttTopic: string | null
    helicopterId: string | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaspiMaxAggregateOutputType = {
    id: string | null
    name: string | null
    deviceName: string | null
    mqttTopic: string | null
    helicopterId: string | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaspiCountAggregateOutputType = {
    id: number
    name: number
    deviceName: number
    mqttTopic: number
    helicopterId: number
    trailerId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RaspiMinAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    helicopterId?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaspiMaxAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    helicopterId?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaspiCountAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    helicopterId?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RaspiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raspi to aggregate.
     */
    where?: RaspiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raspis to fetch.
     */
    orderBy?: RaspiOrderByWithRelationInput | RaspiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaspiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raspis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raspis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Raspis
    **/
    _count?: true | RaspiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaspiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaspiMaxAggregateInputType
  }

  export type GetRaspiAggregateType<T extends RaspiAggregateArgs> = {
        [P in keyof T & keyof AggregateRaspi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaspi[P]>
      : GetScalarType<T[P], AggregateRaspi[P]>
  }




  export type RaspiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaspiWhereInput
    orderBy?: RaspiOrderByWithAggregationInput | RaspiOrderByWithAggregationInput[]
    by: RaspiScalarFieldEnum[] | RaspiScalarFieldEnum
    having?: RaspiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaspiCountAggregateInputType | true
    _min?: RaspiMinAggregateInputType
    _max?: RaspiMaxAggregateInputType
  }

  export type RaspiGroupByOutputType = {
    id: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId: string | null
    trailerId: string | null
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: RaspiCountAggregateOutputType | null
    _min: RaspiMinAggregateOutputType | null
    _max: RaspiMaxAggregateOutputType | null
  }

  type GetRaspiGroupByPayload<T extends RaspiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaspiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaspiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaspiGroupByOutputType[P]>
            : GetScalarType<T[P], RaspiGroupByOutputType[P]>
        }
      >
    >


  export type RaspiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    raspiData?: boolean | Raspi$raspiDataArgs<ExtArgs>
    _count?: boolean | RaspiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raspi"]>

  export type RaspiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raspi"]>

  export type RaspiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raspi"]>

  export type RaspiSelectScalar = {
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RaspiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deviceName" | "mqttTopic" | "helicopterId" | "trailerId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["raspi"]>
  export type RaspiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    raspiData?: boolean | Raspi$raspiDataArgs<ExtArgs>
    _count?: boolean | RaspiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaspiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RaspiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RaspiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Raspi"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      raspiData: Prisma.$RaspiDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      deviceName: string
      mqttTopic: string
      helicopterId: string | null
      trailerId: string | null
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["raspi"]>
    composites: {}
  }

  type RaspiGetPayload<S extends boolean | null | undefined | RaspiDefaultArgs> = $Result.GetResult<Prisma.$RaspiPayload, S>

  type RaspiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaspiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaspiCountAggregateInputType | true
    }

  export interface RaspiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Raspi'], meta: { name: 'Raspi' } }
    /**
     * Find zero or one Raspi that matches the filter.
     * @param {RaspiFindUniqueArgs} args - Arguments to find a Raspi
     * @example
     * // Get one Raspi
     * const raspi = await prisma.raspi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaspiFindUniqueArgs>(args: SelectSubset<T, RaspiFindUniqueArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raspi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaspiFindUniqueOrThrowArgs} args - Arguments to find a Raspi
     * @example
     * // Get one Raspi
     * const raspi = await prisma.raspi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaspiFindUniqueOrThrowArgs>(args: SelectSubset<T, RaspiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raspi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiFindFirstArgs} args - Arguments to find a Raspi
     * @example
     * // Get one Raspi
     * const raspi = await prisma.raspi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaspiFindFirstArgs>(args?: SelectSubset<T, RaspiFindFirstArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raspi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiFindFirstOrThrowArgs} args - Arguments to find a Raspi
     * @example
     * // Get one Raspi
     * const raspi = await prisma.raspi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaspiFindFirstOrThrowArgs>(args?: SelectSubset<T, RaspiFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raspis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raspis
     * const raspis = await prisma.raspi.findMany()
     * 
     * // Get first 10 Raspis
     * const raspis = await prisma.raspi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raspiWithIdOnly = await prisma.raspi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaspiFindManyArgs>(args?: SelectSubset<T, RaspiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raspi.
     * @param {RaspiCreateArgs} args - Arguments to create a Raspi.
     * @example
     * // Create one Raspi
     * const Raspi = await prisma.raspi.create({
     *   data: {
     *     // ... data to create a Raspi
     *   }
     * })
     * 
     */
    create<T extends RaspiCreateArgs>(args: SelectSubset<T, RaspiCreateArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raspis.
     * @param {RaspiCreateManyArgs} args - Arguments to create many Raspis.
     * @example
     * // Create many Raspis
     * const raspi = await prisma.raspi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaspiCreateManyArgs>(args?: SelectSubset<T, RaspiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raspis and returns the data saved in the database.
     * @param {RaspiCreateManyAndReturnArgs} args - Arguments to create many Raspis.
     * @example
     * // Create many Raspis
     * const raspi = await prisma.raspi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raspis and only return the `id`
     * const raspiWithIdOnly = await prisma.raspi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaspiCreateManyAndReturnArgs>(args?: SelectSubset<T, RaspiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raspi.
     * @param {RaspiDeleteArgs} args - Arguments to delete one Raspi.
     * @example
     * // Delete one Raspi
     * const Raspi = await prisma.raspi.delete({
     *   where: {
     *     // ... filter to delete one Raspi
     *   }
     * })
     * 
     */
    delete<T extends RaspiDeleteArgs>(args: SelectSubset<T, RaspiDeleteArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raspi.
     * @param {RaspiUpdateArgs} args - Arguments to update one Raspi.
     * @example
     * // Update one Raspi
     * const raspi = await prisma.raspi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaspiUpdateArgs>(args: SelectSubset<T, RaspiUpdateArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raspis.
     * @param {RaspiDeleteManyArgs} args - Arguments to filter Raspis to delete.
     * @example
     * // Delete a few Raspis
     * const { count } = await prisma.raspi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaspiDeleteManyArgs>(args?: SelectSubset<T, RaspiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raspis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raspis
     * const raspi = await prisma.raspi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaspiUpdateManyArgs>(args: SelectSubset<T, RaspiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raspis and returns the data updated in the database.
     * @param {RaspiUpdateManyAndReturnArgs} args - Arguments to update many Raspis.
     * @example
     * // Update many Raspis
     * const raspi = await prisma.raspi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raspis and only return the `id`
     * const raspiWithIdOnly = await prisma.raspi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaspiUpdateManyAndReturnArgs>(args: SelectSubset<T, RaspiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raspi.
     * @param {RaspiUpsertArgs} args - Arguments to update or create a Raspi.
     * @example
     * // Update or create a Raspi
     * const raspi = await prisma.raspi.upsert({
     *   create: {
     *     // ... data to create a Raspi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raspi we want to update
     *   }
     * })
     */
    upsert<T extends RaspiUpsertArgs>(args: SelectSubset<T, RaspiUpsertArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raspis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiCountArgs} args - Arguments to filter Raspis to count.
     * @example
     * // Count the number of Raspis
     * const count = await prisma.raspi.count({
     *   where: {
     *     // ... the filter for the Raspis we want to count
     *   }
     * })
    **/
    count<T extends RaspiCountArgs>(
      args?: Subset<T, RaspiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaspiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raspi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaspiAggregateArgs>(args: Subset<T, RaspiAggregateArgs>): Prisma.PrismaPromise<GetRaspiAggregateType<T>>

    /**
     * Group by Raspi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaspiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaspiGroupByArgs['orderBy'] }
        : { orderBy?: RaspiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaspiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaspiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Raspi model
   */
  readonly fields: RaspiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Raspi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaspiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raspiData<T extends Raspi$raspiDataArgs<ExtArgs> = {}>(args?: Subset<T, Raspi$raspiDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Raspi model
   */
  interface RaspiFieldRefs {
    readonly id: FieldRef<"Raspi", 'String'>
    readonly name: FieldRef<"Raspi", 'String'>
    readonly deviceName: FieldRef<"Raspi", 'String'>
    readonly mqttTopic: FieldRef<"Raspi", 'String'>
    readonly helicopterId: FieldRef<"Raspi", 'String'>
    readonly trailerId: FieldRef<"Raspi", 'String'>
    readonly createdBy: FieldRef<"Raspi", 'String'>
    readonly createdAt: FieldRef<"Raspi", 'DateTime'>
    readonly updatedAt: FieldRef<"Raspi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Raspi findUnique
   */
  export type RaspiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * Filter, which Raspi to fetch.
     */
    where: RaspiWhereUniqueInput
  }

  /**
   * Raspi findUniqueOrThrow
   */
  export type RaspiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * Filter, which Raspi to fetch.
     */
    where: RaspiWhereUniqueInput
  }

  /**
   * Raspi findFirst
   */
  export type RaspiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * Filter, which Raspi to fetch.
     */
    where?: RaspiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raspis to fetch.
     */
    orderBy?: RaspiOrderByWithRelationInput | RaspiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raspis.
     */
    cursor?: RaspiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raspis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raspis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raspis.
     */
    distinct?: RaspiScalarFieldEnum | RaspiScalarFieldEnum[]
  }

  /**
   * Raspi findFirstOrThrow
   */
  export type RaspiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * Filter, which Raspi to fetch.
     */
    where?: RaspiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raspis to fetch.
     */
    orderBy?: RaspiOrderByWithRelationInput | RaspiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raspis.
     */
    cursor?: RaspiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raspis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raspis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raspis.
     */
    distinct?: RaspiScalarFieldEnum | RaspiScalarFieldEnum[]
  }

  /**
   * Raspi findMany
   */
  export type RaspiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * Filter, which Raspis to fetch.
     */
    where?: RaspiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raspis to fetch.
     */
    orderBy?: RaspiOrderByWithRelationInput | RaspiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Raspis.
     */
    cursor?: RaspiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raspis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raspis.
     */
    skip?: number
    distinct?: RaspiScalarFieldEnum | RaspiScalarFieldEnum[]
  }

  /**
   * Raspi create
   */
  export type RaspiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * The data needed to create a Raspi.
     */
    data: XOR<RaspiCreateInput, RaspiUncheckedCreateInput>
  }

  /**
   * Raspi createMany
   */
  export type RaspiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Raspis.
     */
    data: RaspiCreateManyInput | RaspiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Raspi createManyAndReturn
   */
  export type RaspiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * The data used to create many Raspis.
     */
    data: RaspiCreateManyInput | RaspiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Raspi update
   */
  export type RaspiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * The data needed to update a Raspi.
     */
    data: XOR<RaspiUpdateInput, RaspiUncheckedUpdateInput>
    /**
     * Choose, which Raspi to update.
     */
    where: RaspiWhereUniqueInput
  }

  /**
   * Raspi updateMany
   */
  export type RaspiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Raspis.
     */
    data: XOR<RaspiUpdateManyMutationInput, RaspiUncheckedUpdateManyInput>
    /**
     * Filter which Raspis to update
     */
    where?: RaspiWhereInput
    /**
     * Limit how many Raspis to update.
     */
    limit?: number
  }

  /**
   * Raspi updateManyAndReturn
   */
  export type RaspiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * The data used to update Raspis.
     */
    data: XOR<RaspiUpdateManyMutationInput, RaspiUncheckedUpdateManyInput>
    /**
     * Filter which Raspis to update
     */
    where?: RaspiWhereInput
    /**
     * Limit how many Raspis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Raspi upsert
   */
  export type RaspiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * The filter to search for the Raspi to update in case it exists.
     */
    where: RaspiWhereUniqueInput
    /**
     * In case the Raspi found by the `where` argument doesn't exist, create a new Raspi with this data.
     */
    create: XOR<RaspiCreateInput, RaspiUncheckedCreateInput>
    /**
     * In case the Raspi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaspiUpdateInput, RaspiUncheckedUpdateInput>
  }

  /**
   * Raspi delete
   */
  export type RaspiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
    /**
     * Filter which Raspi to delete.
     */
    where: RaspiWhereUniqueInput
  }

  /**
   * Raspi deleteMany
   */
  export type RaspiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raspis to delete
     */
    where?: RaspiWhereInput
    /**
     * Limit how many Raspis to delete.
     */
    limit?: number
  }

  /**
   * Raspi.raspiData
   */
  export type Raspi$raspiDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    where?: RaspiDataWhereInput
    orderBy?: RaspiDataOrderByWithRelationInput | RaspiDataOrderByWithRelationInput[]
    cursor?: RaspiDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaspiDataScalarFieldEnum | RaspiDataScalarFieldEnum[]
  }

  /**
   * Raspi without action
   */
  export type RaspiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raspi
     */
    select?: RaspiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raspi
     */
    omit?: RaspiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiInclude<ExtArgs> | null
  }


  /**
   * Model TiltSensor
   */

  export type AggregateTiltSensor = {
    _count: TiltSensorCountAggregateOutputType | null
    _min: TiltSensorMinAggregateOutputType | null
    _max: TiltSensorMaxAggregateOutputType | null
  }

  export type TiltSensorMinAggregateOutputType = {
    id: string | null
    name: string | null
    deviceName: string | null
    mqttTopic: string | null
    helicopterId: string | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiltSensorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    deviceName: string | null
    mqttTopic: string | null
    helicopterId: string | null
    trailerId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiltSensorCountAggregateOutputType = {
    id: number
    name: number
    deviceName: number
    mqttTopic: number
    helicopterId: number
    trailerId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TiltSensorMinAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    helicopterId?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiltSensorMaxAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    helicopterId?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiltSensorCountAggregateInputType = {
    id?: true
    name?: true
    deviceName?: true
    mqttTopic?: true
    helicopterId?: true
    trailerId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TiltSensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiltSensor to aggregate.
     */
    where?: TiltSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltSensors to fetch.
     */
    orderBy?: TiltSensorOrderByWithRelationInput | TiltSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiltSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltSensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiltSensors
    **/
    _count?: true | TiltSensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiltSensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiltSensorMaxAggregateInputType
  }

  export type GetTiltSensorAggregateType<T extends TiltSensorAggregateArgs> = {
        [P in keyof T & keyof AggregateTiltSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiltSensor[P]>
      : GetScalarType<T[P], AggregateTiltSensor[P]>
  }




  export type TiltSensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiltSensorWhereInput
    orderBy?: TiltSensorOrderByWithAggregationInput | TiltSensorOrderByWithAggregationInput[]
    by: TiltSensorScalarFieldEnum[] | TiltSensorScalarFieldEnum
    having?: TiltSensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiltSensorCountAggregateInputType | true
    _min?: TiltSensorMinAggregateInputType
    _max?: TiltSensorMaxAggregateInputType
  }

  export type TiltSensorGroupByOutputType = {
    id: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId: string | null
    trailerId: string | null
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: TiltSensorCountAggregateOutputType | null
    _min: TiltSensorMinAggregateOutputType | null
    _max: TiltSensorMaxAggregateOutputType | null
  }

  type GetTiltSensorGroupByPayload<T extends TiltSensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiltSensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiltSensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiltSensorGroupByOutputType[P]>
            : GetScalarType<T[P], TiltSensorGroupByOutputType[P]>
        }
      >
    >


  export type TiltSensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tiltData?: boolean | TiltSensor$tiltDataArgs<ExtArgs>
    _count?: boolean | TiltSensorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiltSensor"]>

  export type TiltSensorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiltSensor"]>

  export type TiltSensorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiltSensor"]>

  export type TiltSensorSelectScalar = {
    id?: boolean
    name?: boolean
    deviceName?: boolean
    mqttTopic?: boolean
    helicopterId?: boolean
    trailerId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TiltSensorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deviceName" | "mqttTopic" | "helicopterId" | "trailerId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["tiltSensor"]>
  export type TiltSensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tiltData?: boolean | TiltSensor$tiltDataArgs<ExtArgs>
    _count?: boolean | TiltSensorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TiltSensorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TiltSensorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TiltSensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiltSensor"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      tiltData: Prisma.$TiltDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      deviceName: string
      mqttTopic: string
      helicopterId: string | null
      trailerId: string | null
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tiltSensor"]>
    composites: {}
  }

  type TiltSensorGetPayload<S extends boolean | null | undefined | TiltSensorDefaultArgs> = $Result.GetResult<Prisma.$TiltSensorPayload, S>

  type TiltSensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiltSensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiltSensorCountAggregateInputType | true
    }

  export interface TiltSensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiltSensor'], meta: { name: 'TiltSensor' } }
    /**
     * Find zero or one TiltSensor that matches the filter.
     * @param {TiltSensorFindUniqueArgs} args - Arguments to find a TiltSensor
     * @example
     * // Get one TiltSensor
     * const tiltSensor = await prisma.tiltSensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiltSensorFindUniqueArgs>(args: SelectSubset<T, TiltSensorFindUniqueArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiltSensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiltSensorFindUniqueOrThrowArgs} args - Arguments to find a TiltSensor
     * @example
     * // Get one TiltSensor
     * const tiltSensor = await prisma.tiltSensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiltSensorFindUniqueOrThrowArgs>(args: SelectSubset<T, TiltSensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiltSensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltSensorFindFirstArgs} args - Arguments to find a TiltSensor
     * @example
     * // Get one TiltSensor
     * const tiltSensor = await prisma.tiltSensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiltSensorFindFirstArgs>(args?: SelectSubset<T, TiltSensorFindFirstArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiltSensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltSensorFindFirstOrThrowArgs} args - Arguments to find a TiltSensor
     * @example
     * // Get one TiltSensor
     * const tiltSensor = await prisma.tiltSensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiltSensorFindFirstOrThrowArgs>(args?: SelectSubset<T, TiltSensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiltSensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltSensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiltSensors
     * const tiltSensors = await prisma.tiltSensor.findMany()
     * 
     * // Get first 10 TiltSensors
     * const tiltSensors = await prisma.tiltSensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiltSensorWithIdOnly = await prisma.tiltSensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiltSensorFindManyArgs>(args?: SelectSubset<T, TiltSensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiltSensor.
     * @param {TiltSensorCreateArgs} args - Arguments to create a TiltSensor.
     * @example
     * // Create one TiltSensor
     * const TiltSensor = await prisma.tiltSensor.create({
     *   data: {
     *     // ... data to create a TiltSensor
     *   }
     * })
     * 
     */
    create<T extends TiltSensorCreateArgs>(args: SelectSubset<T, TiltSensorCreateArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiltSensors.
     * @param {TiltSensorCreateManyArgs} args - Arguments to create many TiltSensors.
     * @example
     * // Create many TiltSensors
     * const tiltSensor = await prisma.tiltSensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiltSensorCreateManyArgs>(args?: SelectSubset<T, TiltSensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiltSensors and returns the data saved in the database.
     * @param {TiltSensorCreateManyAndReturnArgs} args - Arguments to create many TiltSensors.
     * @example
     * // Create many TiltSensors
     * const tiltSensor = await prisma.tiltSensor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiltSensors and only return the `id`
     * const tiltSensorWithIdOnly = await prisma.tiltSensor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiltSensorCreateManyAndReturnArgs>(args?: SelectSubset<T, TiltSensorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiltSensor.
     * @param {TiltSensorDeleteArgs} args - Arguments to delete one TiltSensor.
     * @example
     * // Delete one TiltSensor
     * const TiltSensor = await prisma.tiltSensor.delete({
     *   where: {
     *     // ... filter to delete one TiltSensor
     *   }
     * })
     * 
     */
    delete<T extends TiltSensorDeleteArgs>(args: SelectSubset<T, TiltSensorDeleteArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiltSensor.
     * @param {TiltSensorUpdateArgs} args - Arguments to update one TiltSensor.
     * @example
     * // Update one TiltSensor
     * const tiltSensor = await prisma.tiltSensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiltSensorUpdateArgs>(args: SelectSubset<T, TiltSensorUpdateArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiltSensors.
     * @param {TiltSensorDeleteManyArgs} args - Arguments to filter TiltSensors to delete.
     * @example
     * // Delete a few TiltSensors
     * const { count } = await prisma.tiltSensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiltSensorDeleteManyArgs>(args?: SelectSubset<T, TiltSensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiltSensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltSensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiltSensors
     * const tiltSensor = await prisma.tiltSensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiltSensorUpdateManyArgs>(args: SelectSubset<T, TiltSensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiltSensors and returns the data updated in the database.
     * @param {TiltSensorUpdateManyAndReturnArgs} args - Arguments to update many TiltSensors.
     * @example
     * // Update many TiltSensors
     * const tiltSensor = await prisma.tiltSensor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiltSensors and only return the `id`
     * const tiltSensorWithIdOnly = await prisma.tiltSensor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiltSensorUpdateManyAndReturnArgs>(args: SelectSubset<T, TiltSensorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiltSensor.
     * @param {TiltSensorUpsertArgs} args - Arguments to update or create a TiltSensor.
     * @example
     * // Update or create a TiltSensor
     * const tiltSensor = await prisma.tiltSensor.upsert({
     *   create: {
     *     // ... data to create a TiltSensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiltSensor we want to update
     *   }
     * })
     */
    upsert<T extends TiltSensorUpsertArgs>(args: SelectSubset<T, TiltSensorUpsertArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiltSensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltSensorCountArgs} args - Arguments to filter TiltSensors to count.
     * @example
     * // Count the number of TiltSensors
     * const count = await prisma.tiltSensor.count({
     *   where: {
     *     // ... the filter for the TiltSensors we want to count
     *   }
     * })
    **/
    count<T extends TiltSensorCountArgs>(
      args?: Subset<T, TiltSensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiltSensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiltSensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltSensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiltSensorAggregateArgs>(args: Subset<T, TiltSensorAggregateArgs>): Prisma.PrismaPromise<GetTiltSensorAggregateType<T>>

    /**
     * Group by TiltSensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltSensorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiltSensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiltSensorGroupByArgs['orderBy'] }
        : { orderBy?: TiltSensorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiltSensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiltSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiltSensor model
   */
  readonly fields: TiltSensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiltSensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiltSensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tiltData<T extends TiltSensor$tiltDataArgs<ExtArgs> = {}>(args?: Subset<T, TiltSensor$tiltDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiltSensor model
   */
  interface TiltSensorFieldRefs {
    readonly id: FieldRef<"TiltSensor", 'String'>
    readonly name: FieldRef<"TiltSensor", 'String'>
    readonly deviceName: FieldRef<"TiltSensor", 'String'>
    readonly mqttTopic: FieldRef<"TiltSensor", 'String'>
    readonly helicopterId: FieldRef<"TiltSensor", 'String'>
    readonly trailerId: FieldRef<"TiltSensor", 'String'>
    readonly createdBy: FieldRef<"TiltSensor", 'String'>
    readonly createdAt: FieldRef<"TiltSensor", 'DateTime'>
    readonly updatedAt: FieldRef<"TiltSensor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TiltSensor findUnique
   */
  export type TiltSensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * Filter, which TiltSensor to fetch.
     */
    where: TiltSensorWhereUniqueInput
  }

  /**
   * TiltSensor findUniqueOrThrow
   */
  export type TiltSensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * Filter, which TiltSensor to fetch.
     */
    where: TiltSensorWhereUniqueInput
  }

  /**
   * TiltSensor findFirst
   */
  export type TiltSensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * Filter, which TiltSensor to fetch.
     */
    where?: TiltSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltSensors to fetch.
     */
    orderBy?: TiltSensorOrderByWithRelationInput | TiltSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiltSensors.
     */
    cursor?: TiltSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltSensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiltSensors.
     */
    distinct?: TiltSensorScalarFieldEnum | TiltSensorScalarFieldEnum[]
  }

  /**
   * TiltSensor findFirstOrThrow
   */
  export type TiltSensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * Filter, which TiltSensor to fetch.
     */
    where?: TiltSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltSensors to fetch.
     */
    orderBy?: TiltSensorOrderByWithRelationInput | TiltSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiltSensors.
     */
    cursor?: TiltSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltSensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiltSensors.
     */
    distinct?: TiltSensorScalarFieldEnum | TiltSensorScalarFieldEnum[]
  }

  /**
   * TiltSensor findMany
   */
  export type TiltSensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * Filter, which TiltSensors to fetch.
     */
    where?: TiltSensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltSensors to fetch.
     */
    orderBy?: TiltSensorOrderByWithRelationInput | TiltSensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiltSensors.
     */
    cursor?: TiltSensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltSensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltSensors.
     */
    skip?: number
    distinct?: TiltSensorScalarFieldEnum | TiltSensorScalarFieldEnum[]
  }

  /**
   * TiltSensor create
   */
  export type TiltSensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * The data needed to create a TiltSensor.
     */
    data: XOR<TiltSensorCreateInput, TiltSensorUncheckedCreateInput>
  }

  /**
   * TiltSensor createMany
   */
  export type TiltSensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiltSensors.
     */
    data: TiltSensorCreateManyInput | TiltSensorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiltSensor createManyAndReturn
   */
  export type TiltSensorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * The data used to create many TiltSensors.
     */
    data: TiltSensorCreateManyInput | TiltSensorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiltSensor update
   */
  export type TiltSensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * The data needed to update a TiltSensor.
     */
    data: XOR<TiltSensorUpdateInput, TiltSensorUncheckedUpdateInput>
    /**
     * Choose, which TiltSensor to update.
     */
    where: TiltSensorWhereUniqueInput
  }

  /**
   * TiltSensor updateMany
   */
  export type TiltSensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiltSensors.
     */
    data: XOR<TiltSensorUpdateManyMutationInput, TiltSensorUncheckedUpdateManyInput>
    /**
     * Filter which TiltSensors to update
     */
    where?: TiltSensorWhereInput
    /**
     * Limit how many TiltSensors to update.
     */
    limit?: number
  }

  /**
   * TiltSensor updateManyAndReturn
   */
  export type TiltSensorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * The data used to update TiltSensors.
     */
    data: XOR<TiltSensorUpdateManyMutationInput, TiltSensorUncheckedUpdateManyInput>
    /**
     * Filter which TiltSensors to update
     */
    where?: TiltSensorWhereInput
    /**
     * Limit how many TiltSensors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiltSensor upsert
   */
  export type TiltSensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * The filter to search for the TiltSensor to update in case it exists.
     */
    where: TiltSensorWhereUniqueInput
    /**
     * In case the TiltSensor found by the `where` argument doesn't exist, create a new TiltSensor with this data.
     */
    create: XOR<TiltSensorCreateInput, TiltSensorUncheckedCreateInput>
    /**
     * In case the TiltSensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiltSensorUpdateInput, TiltSensorUncheckedUpdateInput>
  }

  /**
   * TiltSensor delete
   */
  export type TiltSensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
    /**
     * Filter which TiltSensor to delete.
     */
    where: TiltSensorWhereUniqueInput
  }

  /**
   * TiltSensor deleteMany
   */
  export type TiltSensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiltSensors to delete
     */
    where?: TiltSensorWhereInput
    /**
     * Limit how many TiltSensors to delete.
     */
    limit?: number
  }

  /**
   * TiltSensor.tiltData
   */
  export type TiltSensor$tiltDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    where?: TiltDataWhereInput
    orderBy?: TiltDataOrderByWithRelationInput | TiltDataOrderByWithRelationInput[]
    cursor?: TiltDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TiltDataScalarFieldEnum | TiltDataScalarFieldEnum[]
  }

  /**
   * TiltSensor without action
   */
  export type TiltSensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltSensor
     */
    select?: TiltSensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltSensor
     */
    omit?: TiltSensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltSensorInclude<ExtArgs> | null
  }


  /**
   * Model SerialNumber
   */

  export type AggregateSerialNumber = {
    _count: SerialNumberCountAggregateOutputType | null
    _min: SerialNumberMinAggregateOutputType | null
    _max: SerialNumberMaxAggregateOutputType | null
  }

  export type SerialNumberMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    serialNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SerialNumberMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    serialNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SerialNumberCountAggregateOutputType = {
    id: number
    type: number
    name: number
    serialNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SerialNumberMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    serialNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SerialNumberMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    serialNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SerialNumberCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    serialNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SerialNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SerialNumber to aggregate.
     */
    where?: SerialNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerialNumbers to fetch.
     */
    orderBy?: SerialNumberOrderByWithRelationInput | SerialNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SerialNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerialNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerialNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SerialNumbers
    **/
    _count?: true | SerialNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SerialNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SerialNumberMaxAggregateInputType
  }

  export type GetSerialNumberAggregateType<T extends SerialNumberAggregateArgs> = {
        [P in keyof T & keyof AggregateSerialNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSerialNumber[P]>
      : GetScalarType<T[P], AggregateSerialNumber[P]>
  }




  export type SerialNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerialNumberWhereInput
    orderBy?: SerialNumberOrderByWithAggregationInput | SerialNumberOrderByWithAggregationInput[]
    by: SerialNumberScalarFieldEnum[] | SerialNumberScalarFieldEnum
    having?: SerialNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SerialNumberCountAggregateInputType | true
    _min?: SerialNumberMinAggregateInputType
    _max?: SerialNumberMaxAggregateInputType
  }

  export type SerialNumberGroupByOutputType = {
    id: string
    type: string
    name: string
    serialNumber: string
    createdAt: Date
    updatedAt: Date
    _count: SerialNumberCountAggregateOutputType | null
    _min: SerialNumberMinAggregateOutputType | null
    _max: SerialNumberMaxAggregateOutputType | null
  }

  type GetSerialNumberGroupByPayload<T extends SerialNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SerialNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SerialNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SerialNumberGroupByOutputType[P]>
            : GetScalarType<T[P], SerialNumberGroupByOutputType[P]>
        }
      >
    >


  export type SerialNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serialNumber"]>

  export type SerialNumberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serialNumber"]>

  export type SerialNumberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serialNumber"]>

  export type SerialNumberSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SerialNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "serialNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["serialNumber"]>

  export type $SerialNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SerialNumber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      name: string
      serialNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serialNumber"]>
    composites: {}
  }

  type SerialNumberGetPayload<S extends boolean | null | undefined | SerialNumberDefaultArgs> = $Result.GetResult<Prisma.$SerialNumberPayload, S>

  type SerialNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SerialNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SerialNumberCountAggregateInputType | true
    }

  export interface SerialNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SerialNumber'], meta: { name: 'SerialNumber' } }
    /**
     * Find zero or one SerialNumber that matches the filter.
     * @param {SerialNumberFindUniqueArgs} args - Arguments to find a SerialNumber
     * @example
     * // Get one SerialNumber
     * const serialNumber = await prisma.serialNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SerialNumberFindUniqueArgs>(args: SelectSubset<T, SerialNumberFindUniqueArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SerialNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SerialNumberFindUniqueOrThrowArgs} args - Arguments to find a SerialNumber
     * @example
     * // Get one SerialNumber
     * const serialNumber = await prisma.serialNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SerialNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, SerialNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SerialNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerialNumberFindFirstArgs} args - Arguments to find a SerialNumber
     * @example
     * // Get one SerialNumber
     * const serialNumber = await prisma.serialNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SerialNumberFindFirstArgs>(args?: SelectSubset<T, SerialNumberFindFirstArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SerialNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerialNumberFindFirstOrThrowArgs} args - Arguments to find a SerialNumber
     * @example
     * // Get one SerialNumber
     * const serialNumber = await prisma.serialNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SerialNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, SerialNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SerialNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerialNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SerialNumbers
     * const serialNumbers = await prisma.serialNumber.findMany()
     * 
     * // Get first 10 SerialNumbers
     * const serialNumbers = await prisma.serialNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serialNumberWithIdOnly = await prisma.serialNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SerialNumberFindManyArgs>(args?: SelectSubset<T, SerialNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SerialNumber.
     * @param {SerialNumberCreateArgs} args - Arguments to create a SerialNumber.
     * @example
     * // Create one SerialNumber
     * const SerialNumber = await prisma.serialNumber.create({
     *   data: {
     *     // ... data to create a SerialNumber
     *   }
     * })
     * 
     */
    create<T extends SerialNumberCreateArgs>(args: SelectSubset<T, SerialNumberCreateArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SerialNumbers.
     * @param {SerialNumberCreateManyArgs} args - Arguments to create many SerialNumbers.
     * @example
     * // Create many SerialNumbers
     * const serialNumber = await prisma.serialNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SerialNumberCreateManyArgs>(args?: SelectSubset<T, SerialNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SerialNumbers and returns the data saved in the database.
     * @param {SerialNumberCreateManyAndReturnArgs} args - Arguments to create many SerialNumbers.
     * @example
     * // Create many SerialNumbers
     * const serialNumber = await prisma.serialNumber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SerialNumbers and only return the `id`
     * const serialNumberWithIdOnly = await prisma.serialNumber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SerialNumberCreateManyAndReturnArgs>(args?: SelectSubset<T, SerialNumberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SerialNumber.
     * @param {SerialNumberDeleteArgs} args - Arguments to delete one SerialNumber.
     * @example
     * // Delete one SerialNumber
     * const SerialNumber = await prisma.serialNumber.delete({
     *   where: {
     *     // ... filter to delete one SerialNumber
     *   }
     * })
     * 
     */
    delete<T extends SerialNumberDeleteArgs>(args: SelectSubset<T, SerialNumberDeleteArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SerialNumber.
     * @param {SerialNumberUpdateArgs} args - Arguments to update one SerialNumber.
     * @example
     * // Update one SerialNumber
     * const serialNumber = await prisma.serialNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SerialNumberUpdateArgs>(args: SelectSubset<T, SerialNumberUpdateArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SerialNumbers.
     * @param {SerialNumberDeleteManyArgs} args - Arguments to filter SerialNumbers to delete.
     * @example
     * // Delete a few SerialNumbers
     * const { count } = await prisma.serialNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SerialNumberDeleteManyArgs>(args?: SelectSubset<T, SerialNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SerialNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerialNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SerialNumbers
     * const serialNumber = await prisma.serialNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SerialNumberUpdateManyArgs>(args: SelectSubset<T, SerialNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SerialNumbers and returns the data updated in the database.
     * @param {SerialNumberUpdateManyAndReturnArgs} args - Arguments to update many SerialNumbers.
     * @example
     * // Update many SerialNumbers
     * const serialNumber = await prisma.serialNumber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SerialNumbers and only return the `id`
     * const serialNumberWithIdOnly = await prisma.serialNumber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SerialNumberUpdateManyAndReturnArgs>(args: SelectSubset<T, SerialNumberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SerialNumber.
     * @param {SerialNumberUpsertArgs} args - Arguments to update or create a SerialNumber.
     * @example
     * // Update or create a SerialNumber
     * const serialNumber = await prisma.serialNumber.upsert({
     *   create: {
     *     // ... data to create a SerialNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SerialNumber we want to update
     *   }
     * })
     */
    upsert<T extends SerialNumberUpsertArgs>(args: SelectSubset<T, SerialNumberUpsertArgs<ExtArgs>>): Prisma__SerialNumberClient<$Result.GetResult<Prisma.$SerialNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SerialNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerialNumberCountArgs} args - Arguments to filter SerialNumbers to count.
     * @example
     * // Count the number of SerialNumbers
     * const count = await prisma.serialNumber.count({
     *   where: {
     *     // ... the filter for the SerialNumbers we want to count
     *   }
     * })
    **/
    count<T extends SerialNumberCountArgs>(
      args?: Subset<T, SerialNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SerialNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SerialNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerialNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SerialNumberAggregateArgs>(args: Subset<T, SerialNumberAggregateArgs>): Prisma.PrismaPromise<GetSerialNumberAggregateType<T>>

    /**
     * Group by SerialNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerialNumberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SerialNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SerialNumberGroupByArgs['orderBy'] }
        : { orderBy?: SerialNumberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SerialNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerialNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SerialNumber model
   */
  readonly fields: SerialNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SerialNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SerialNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SerialNumber model
   */
  interface SerialNumberFieldRefs {
    readonly id: FieldRef<"SerialNumber", 'String'>
    readonly type: FieldRef<"SerialNumber", 'String'>
    readonly name: FieldRef<"SerialNumber", 'String'>
    readonly serialNumber: FieldRef<"SerialNumber", 'String'>
    readonly createdAt: FieldRef<"SerialNumber", 'DateTime'>
    readonly updatedAt: FieldRef<"SerialNumber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SerialNumber findUnique
   */
  export type SerialNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * Filter, which SerialNumber to fetch.
     */
    where: SerialNumberWhereUniqueInput
  }

  /**
   * SerialNumber findUniqueOrThrow
   */
  export type SerialNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * Filter, which SerialNumber to fetch.
     */
    where: SerialNumberWhereUniqueInput
  }

  /**
   * SerialNumber findFirst
   */
  export type SerialNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * Filter, which SerialNumber to fetch.
     */
    where?: SerialNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerialNumbers to fetch.
     */
    orderBy?: SerialNumberOrderByWithRelationInput | SerialNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SerialNumbers.
     */
    cursor?: SerialNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerialNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerialNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SerialNumbers.
     */
    distinct?: SerialNumberScalarFieldEnum | SerialNumberScalarFieldEnum[]
  }

  /**
   * SerialNumber findFirstOrThrow
   */
  export type SerialNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * Filter, which SerialNumber to fetch.
     */
    where?: SerialNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerialNumbers to fetch.
     */
    orderBy?: SerialNumberOrderByWithRelationInput | SerialNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SerialNumbers.
     */
    cursor?: SerialNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerialNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerialNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SerialNumbers.
     */
    distinct?: SerialNumberScalarFieldEnum | SerialNumberScalarFieldEnum[]
  }

  /**
   * SerialNumber findMany
   */
  export type SerialNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * Filter, which SerialNumbers to fetch.
     */
    where?: SerialNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerialNumbers to fetch.
     */
    orderBy?: SerialNumberOrderByWithRelationInput | SerialNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SerialNumbers.
     */
    cursor?: SerialNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerialNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerialNumbers.
     */
    skip?: number
    distinct?: SerialNumberScalarFieldEnum | SerialNumberScalarFieldEnum[]
  }

  /**
   * SerialNumber create
   */
  export type SerialNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * The data needed to create a SerialNumber.
     */
    data: XOR<SerialNumberCreateInput, SerialNumberUncheckedCreateInput>
  }

  /**
   * SerialNumber createMany
   */
  export type SerialNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SerialNumbers.
     */
    data: SerialNumberCreateManyInput | SerialNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SerialNumber createManyAndReturn
   */
  export type SerialNumberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * The data used to create many SerialNumbers.
     */
    data: SerialNumberCreateManyInput | SerialNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SerialNumber update
   */
  export type SerialNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * The data needed to update a SerialNumber.
     */
    data: XOR<SerialNumberUpdateInput, SerialNumberUncheckedUpdateInput>
    /**
     * Choose, which SerialNumber to update.
     */
    where: SerialNumberWhereUniqueInput
  }

  /**
   * SerialNumber updateMany
   */
  export type SerialNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SerialNumbers.
     */
    data: XOR<SerialNumberUpdateManyMutationInput, SerialNumberUncheckedUpdateManyInput>
    /**
     * Filter which SerialNumbers to update
     */
    where?: SerialNumberWhereInput
    /**
     * Limit how many SerialNumbers to update.
     */
    limit?: number
  }

  /**
   * SerialNumber updateManyAndReturn
   */
  export type SerialNumberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * The data used to update SerialNumbers.
     */
    data: XOR<SerialNumberUpdateManyMutationInput, SerialNumberUncheckedUpdateManyInput>
    /**
     * Filter which SerialNumbers to update
     */
    where?: SerialNumberWhereInput
    /**
     * Limit how many SerialNumbers to update.
     */
    limit?: number
  }

  /**
   * SerialNumber upsert
   */
  export type SerialNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * The filter to search for the SerialNumber to update in case it exists.
     */
    where: SerialNumberWhereUniqueInput
    /**
     * In case the SerialNumber found by the `where` argument doesn't exist, create a new SerialNumber with this data.
     */
    create: XOR<SerialNumberCreateInput, SerialNumberUncheckedCreateInput>
    /**
     * In case the SerialNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SerialNumberUpdateInput, SerialNumberUncheckedUpdateInput>
  }

  /**
   * SerialNumber delete
   */
  export type SerialNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
    /**
     * Filter which SerialNumber to delete.
     */
    where: SerialNumberWhereUniqueInput
  }

  /**
   * SerialNumber deleteMany
   */
  export type SerialNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SerialNumbers to delete
     */
    where?: SerialNumberWhereInput
    /**
     * Limit how many SerialNumbers to delete.
     */
    limit?: number
  }

  /**
   * SerialNumber without action
   */
  export type SerialNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerialNumber
     */
    select?: SerialNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerialNumber
     */
    omit?: SerialNumberOmit<ExtArgs> | null
  }


  /**
   * Model MqttConfig
   */

  export type AggregateMqttConfig = {
    _count: MqttConfigCountAggregateOutputType | null
    _avg: MqttConfigAvgAggregateOutputType | null
    _sum: MqttConfigSumAggregateOutputType | null
    _min: MqttConfigMinAggregateOutputType | null
    _max: MqttConfigMaxAggregateOutputType | null
  }

  export type MqttConfigAvgAggregateOutputType = {
    port: number | null
  }

  export type MqttConfigSumAggregateOutputType = {
    port: number | null
  }

  export type MqttConfigMinAggregateOutputType = {
    id: string | null
    basePath: string | null
    host: string | null
    port: number | null
    protocol: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MqttConfigMaxAggregateOutputType = {
    id: string | null
    basePath: string | null
    host: string | null
    port: number | null
    protocol: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MqttConfigCountAggregateOutputType = {
    id: number
    basePath: number
    host: number
    port: number
    protocol: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MqttConfigAvgAggregateInputType = {
    port?: true
  }

  export type MqttConfigSumAggregateInputType = {
    port?: true
  }

  export type MqttConfigMinAggregateInputType = {
    id?: true
    basePath?: true
    host?: true
    port?: true
    protocol?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MqttConfigMaxAggregateInputType = {
    id?: true
    basePath?: true
    host?: true
    port?: true
    protocol?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MqttConfigCountAggregateInputType = {
    id?: true
    basePath?: true
    host?: true
    port?: true
    protocol?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MqttConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MqttConfig to aggregate.
     */
    where?: MqttConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MqttConfigs to fetch.
     */
    orderBy?: MqttConfigOrderByWithRelationInput | MqttConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MqttConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MqttConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MqttConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MqttConfigs
    **/
    _count?: true | MqttConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MqttConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MqttConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MqttConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MqttConfigMaxAggregateInputType
  }

  export type GetMqttConfigAggregateType<T extends MqttConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateMqttConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMqttConfig[P]>
      : GetScalarType<T[P], AggregateMqttConfig[P]>
  }




  export type MqttConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MqttConfigWhereInput
    orderBy?: MqttConfigOrderByWithAggregationInput | MqttConfigOrderByWithAggregationInput[]
    by: MqttConfigScalarFieldEnum[] | MqttConfigScalarFieldEnum
    having?: MqttConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MqttConfigCountAggregateInputType | true
    _avg?: MqttConfigAvgAggregateInputType
    _sum?: MqttConfigSumAggregateInputType
    _min?: MqttConfigMinAggregateInputType
    _max?: MqttConfigMaxAggregateInputType
  }

  export type MqttConfigGroupByOutputType = {
    id: string
    basePath: string
    host: string
    port: number
    protocol: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: MqttConfigCountAggregateOutputType | null
    _avg: MqttConfigAvgAggregateOutputType | null
    _sum: MqttConfigSumAggregateOutputType | null
    _min: MqttConfigMinAggregateOutputType | null
    _max: MqttConfigMaxAggregateOutputType | null
  }

  type GetMqttConfigGroupByPayload<T extends MqttConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MqttConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MqttConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MqttConfigGroupByOutputType[P]>
            : GetScalarType<T[P], MqttConfigGroupByOutputType[P]>
        }
      >
    >


  export type MqttConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    basePath?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mqttConfig"]>

  export type MqttConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    basePath?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mqttConfig"]>

  export type MqttConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    basePath?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mqttConfig"]>

  export type MqttConfigSelectScalar = {
    id?: boolean
    basePath?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MqttConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "basePath" | "host" | "port" | "protocol" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["mqttConfig"]>

  export type $MqttConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MqttConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      basePath: string
      host: string
      port: number
      protocol: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mqttConfig"]>
    composites: {}
  }

  type MqttConfigGetPayload<S extends boolean | null | undefined | MqttConfigDefaultArgs> = $Result.GetResult<Prisma.$MqttConfigPayload, S>

  type MqttConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MqttConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MqttConfigCountAggregateInputType | true
    }

  export interface MqttConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MqttConfig'], meta: { name: 'MqttConfig' } }
    /**
     * Find zero or one MqttConfig that matches the filter.
     * @param {MqttConfigFindUniqueArgs} args - Arguments to find a MqttConfig
     * @example
     * // Get one MqttConfig
     * const mqttConfig = await prisma.mqttConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MqttConfigFindUniqueArgs>(args: SelectSubset<T, MqttConfigFindUniqueArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MqttConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MqttConfigFindUniqueOrThrowArgs} args - Arguments to find a MqttConfig
     * @example
     * // Get one MqttConfig
     * const mqttConfig = await prisma.mqttConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MqttConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, MqttConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MqttConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MqttConfigFindFirstArgs} args - Arguments to find a MqttConfig
     * @example
     * // Get one MqttConfig
     * const mqttConfig = await prisma.mqttConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MqttConfigFindFirstArgs>(args?: SelectSubset<T, MqttConfigFindFirstArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MqttConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MqttConfigFindFirstOrThrowArgs} args - Arguments to find a MqttConfig
     * @example
     * // Get one MqttConfig
     * const mqttConfig = await prisma.mqttConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MqttConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, MqttConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MqttConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MqttConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MqttConfigs
     * const mqttConfigs = await prisma.mqttConfig.findMany()
     * 
     * // Get first 10 MqttConfigs
     * const mqttConfigs = await prisma.mqttConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mqttConfigWithIdOnly = await prisma.mqttConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MqttConfigFindManyArgs>(args?: SelectSubset<T, MqttConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MqttConfig.
     * @param {MqttConfigCreateArgs} args - Arguments to create a MqttConfig.
     * @example
     * // Create one MqttConfig
     * const MqttConfig = await prisma.mqttConfig.create({
     *   data: {
     *     // ... data to create a MqttConfig
     *   }
     * })
     * 
     */
    create<T extends MqttConfigCreateArgs>(args: SelectSubset<T, MqttConfigCreateArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MqttConfigs.
     * @param {MqttConfigCreateManyArgs} args - Arguments to create many MqttConfigs.
     * @example
     * // Create many MqttConfigs
     * const mqttConfig = await prisma.mqttConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MqttConfigCreateManyArgs>(args?: SelectSubset<T, MqttConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MqttConfigs and returns the data saved in the database.
     * @param {MqttConfigCreateManyAndReturnArgs} args - Arguments to create many MqttConfigs.
     * @example
     * // Create many MqttConfigs
     * const mqttConfig = await prisma.mqttConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MqttConfigs and only return the `id`
     * const mqttConfigWithIdOnly = await prisma.mqttConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MqttConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, MqttConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MqttConfig.
     * @param {MqttConfigDeleteArgs} args - Arguments to delete one MqttConfig.
     * @example
     * // Delete one MqttConfig
     * const MqttConfig = await prisma.mqttConfig.delete({
     *   where: {
     *     // ... filter to delete one MqttConfig
     *   }
     * })
     * 
     */
    delete<T extends MqttConfigDeleteArgs>(args: SelectSubset<T, MqttConfigDeleteArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MqttConfig.
     * @param {MqttConfigUpdateArgs} args - Arguments to update one MqttConfig.
     * @example
     * // Update one MqttConfig
     * const mqttConfig = await prisma.mqttConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MqttConfigUpdateArgs>(args: SelectSubset<T, MqttConfigUpdateArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MqttConfigs.
     * @param {MqttConfigDeleteManyArgs} args - Arguments to filter MqttConfigs to delete.
     * @example
     * // Delete a few MqttConfigs
     * const { count } = await prisma.mqttConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MqttConfigDeleteManyArgs>(args?: SelectSubset<T, MqttConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MqttConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MqttConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MqttConfigs
     * const mqttConfig = await prisma.mqttConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MqttConfigUpdateManyArgs>(args: SelectSubset<T, MqttConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MqttConfigs and returns the data updated in the database.
     * @param {MqttConfigUpdateManyAndReturnArgs} args - Arguments to update many MqttConfigs.
     * @example
     * // Update many MqttConfigs
     * const mqttConfig = await prisma.mqttConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MqttConfigs and only return the `id`
     * const mqttConfigWithIdOnly = await prisma.mqttConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MqttConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, MqttConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MqttConfig.
     * @param {MqttConfigUpsertArgs} args - Arguments to update or create a MqttConfig.
     * @example
     * // Update or create a MqttConfig
     * const mqttConfig = await prisma.mqttConfig.upsert({
     *   create: {
     *     // ... data to create a MqttConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MqttConfig we want to update
     *   }
     * })
     */
    upsert<T extends MqttConfigUpsertArgs>(args: SelectSubset<T, MqttConfigUpsertArgs<ExtArgs>>): Prisma__MqttConfigClient<$Result.GetResult<Prisma.$MqttConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MqttConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MqttConfigCountArgs} args - Arguments to filter MqttConfigs to count.
     * @example
     * // Count the number of MqttConfigs
     * const count = await prisma.mqttConfig.count({
     *   where: {
     *     // ... the filter for the MqttConfigs we want to count
     *   }
     * })
    **/
    count<T extends MqttConfigCountArgs>(
      args?: Subset<T, MqttConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MqttConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MqttConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MqttConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MqttConfigAggregateArgs>(args: Subset<T, MqttConfigAggregateArgs>): Prisma.PrismaPromise<GetMqttConfigAggregateType<T>>

    /**
     * Group by MqttConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MqttConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MqttConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MqttConfigGroupByArgs['orderBy'] }
        : { orderBy?: MqttConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MqttConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMqttConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MqttConfig model
   */
  readonly fields: MqttConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MqttConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MqttConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MqttConfig model
   */
  interface MqttConfigFieldRefs {
    readonly id: FieldRef<"MqttConfig", 'String'>
    readonly basePath: FieldRef<"MqttConfig", 'String'>
    readonly host: FieldRef<"MqttConfig", 'String'>
    readonly port: FieldRef<"MqttConfig", 'Int'>
    readonly protocol: FieldRef<"MqttConfig", 'String'>
    readonly username: FieldRef<"MqttConfig", 'String'>
    readonly password: FieldRef<"MqttConfig", 'String'>
    readonly createdAt: FieldRef<"MqttConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"MqttConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MqttConfig findUnique
   */
  export type MqttConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * Filter, which MqttConfig to fetch.
     */
    where: MqttConfigWhereUniqueInput
  }

  /**
   * MqttConfig findUniqueOrThrow
   */
  export type MqttConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * Filter, which MqttConfig to fetch.
     */
    where: MqttConfigWhereUniqueInput
  }

  /**
   * MqttConfig findFirst
   */
  export type MqttConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * Filter, which MqttConfig to fetch.
     */
    where?: MqttConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MqttConfigs to fetch.
     */
    orderBy?: MqttConfigOrderByWithRelationInput | MqttConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MqttConfigs.
     */
    cursor?: MqttConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MqttConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MqttConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MqttConfigs.
     */
    distinct?: MqttConfigScalarFieldEnum | MqttConfigScalarFieldEnum[]
  }

  /**
   * MqttConfig findFirstOrThrow
   */
  export type MqttConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * Filter, which MqttConfig to fetch.
     */
    where?: MqttConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MqttConfigs to fetch.
     */
    orderBy?: MqttConfigOrderByWithRelationInput | MqttConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MqttConfigs.
     */
    cursor?: MqttConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MqttConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MqttConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MqttConfigs.
     */
    distinct?: MqttConfigScalarFieldEnum | MqttConfigScalarFieldEnum[]
  }

  /**
   * MqttConfig findMany
   */
  export type MqttConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * Filter, which MqttConfigs to fetch.
     */
    where?: MqttConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MqttConfigs to fetch.
     */
    orderBy?: MqttConfigOrderByWithRelationInput | MqttConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MqttConfigs.
     */
    cursor?: MqttConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MqttConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MqttConfigs.
     */
    skip?: number
    distinct?: MqttConfigScalarFieldEnum | MqttConfigScalarFieldEnum[]
  }

  /**
   * MqttConfig create
   */
  export type MqttConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a MqttConfig.
     */
    data: XOR<MqttConfigCreateInput, MqttConfigUncheckedCreateInput>
  }

  /**
   * MqttConfig createMany
   */
  export type MqttConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MqttConfigs.
     */
    data: MqttConfigCreateManyInput | MqttConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MqttConfig createManyAndReturn
   */
  export type MqttConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * The data used to create many MqttConfigs.
     */
    data: MqttConfigCreateManyInput | MqttConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MqttConfig update
   */
  export type MqttConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a MqttConfig.
     */
    data: XOR<MqttConfigUpdateInput, MqttConfigUncheckedUpdateInput>
    /**
     * Choose, which MqttConfig to update.
     */
    where: MqttConfigWhereUniqueInput
  }

  /**
   * MqttConfig updateMany
   */
  export type MqttConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MqttConfigs.
     */
    data: XOR<MqttConfigUpdateManyMutationInput, MqttConfigUncheckedUpdateManyInput>
    /**
     * Filter which MqttConfigs to update
     */
    where?: MqttConfigWhereInput
    /**
     * Limit how many MqttConfigs to update.
     */
    limit?: number
  }

  /**
   * MqttConfig updateManyAndReturn
   */
  export type MqttConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * The data used to update MqttConfigs.
     */
    data: XOR<MqttConfigUpdateManyMutationInput, MqttConfigUncheckedUpdateManyInput>
    /**
     * Filter which MqttConfigs to update
     */
    where?: MqttConfigWhereInput
    /**
     * Limit how many MqttConfigs to update.
     */
    limit?: number
  }

  /**
   * MqttConfig upsert
   */
  export type MqttConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the MqttConfig to update in case it exists.
     */
    where: MqttConfigWhereUniqueInput
    /**
     * In case the MqttConfig found by the `where` argument doesn't exist, create a new MqttConfig with this data.
     */
    create: XOR<MqttConfigCreateInput, MqttConfigUncheckedCreateInput>
    /**
     * In case the MqttConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MqttConfigUpdateInput, MqttConfigUncheckedUpdateInput>
  }

  /**
   * MqttConfig delete
   */
  export type MqttConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
    /**
     * Filter which MqttConfig to delete.
     */
    where: MqttConfigWhereUniqueInput
  }

  /**
   * MqttConfig deleteMany
   */
  export type MqttConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MqttConfigs to delete
     */
    where?: MqttConfigWhereInput
    /**
     * Limit how many MqttConfigs to delete.
     */
    limit?: number
  }

  /**
   * MqttConfig without action
   */
  export type MqttConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MqttConfig
     */
    select?: MqttConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MqttConfig
     */
    omit?: MqttConfigOmit<ExtArgs> | null
  }


  /**
   * Model RaspiData
   */

  export type AggregateRaspiData = {
    _count: RaspiDataCountAggregateOutputType | null
    _avg: RaspiDataAvgAggregateOutputType | null
    _sum: RaspiDataSumAggregateOutputType | null
    _min: RaspiDataMinAggregateOutputType | null
    _max: RaspiDataMaxAggregateOutputType | null
  }

  export type RaspiDataAvgAggregateOutputType = {
    cht1: number | null
    cht2: number | null
    cht3: number | null
    cht4: number | null
    cht5: number | null
    cht6: number | null
    egt1: number | null
    egt2: number | null
    egt3: number | null
    egt4: number | null
    egt5: number | null
    egt6: number | null
  }

  export type RaspiDataSumAggregateOutputType = {
    cht1: number | null
    cht2: number | null
    cht3: number | null
    cht4: number | null
    cht5: number | null
    cht6: number | null
    egt1: number | null
    egt2: number | null
    egt3: number | null
    egt4: number | null
    egt5: number | null
    egt6: number | null
  }

  export type RaspiDataMinAggregateOutputType = {
    id: string | null
    raspiId: string | null
    cht1: number | null
    cht2: number | null
    cht3: number | null
    cht4: number | null
    cht5: number | null
    cht6: number | null
    egt1: number | null
    egt2: number | null
    egt3: number | null
    egt4: number | null
    egt5: number | null
    egt6: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaspiDataMaxAggregateOutputType = {
    id: string | null
    raspiId: string | null
    cht1: number | null
    cht2: number | null
    cht3: number | null
    cht4: number | null
    cht5: number | null
    cht6: number | null
    egt1: number | null
    egt2: number | null
    egt3: number | null
    egt4: number | null
    egt5: number | null
    egt6: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaspiDataCountAggregateOutputType = {
    id: number
    raspiId: number
    cht1: number
    cht2: number
    cht3: number
    cht4: number
    cht5: number
    cht6: number
    egt1: number
    egt2: number
    egt3: number
    egt4: number
    egt5: number
    egt6: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RaspiDataAvgAggregateInputType = {
    cht1?: true
    cht2?: true
    cht3?: true
    cht4?: true
    cht5?: true
    cht6?: true
    egt1?: true
    egt2?: true
    egt3?: true
    egt4?: true
    egt5?: true
    egt6?: true
  }

  export type RaspiDataSumAggregateInputType = {
    cht1?: true
    cht2?: true
    cht3?: true
    cht4?: true
    cht5?: true
    cht6?: true
    egt1?: true
    egt2?: true
    egt3?: true
    egt4?: true
    egt5?: true
    egt6?: true
  }

  export type RaspiDataMinAggregateInputType = {
    id?: true
    raspiId?: true
    cht1?: true
    cht2?: true
    cht3?: true
    cht4?: true
    cht5?: true
    cht6?: true
    egt1?: true
    egt2?: true
    egt3?: true
    egt4?: true
    egt5?: true
    egt6?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaspiDataMaxAggregateInputType = {
    id?: true
    raspiId?: true
    cht1?: true
    cht2?: true
    cht3?: true
    cht4?: true
    cht5?: true
    cht6?: true
    egt1?: true
    egt2?: true
    egt3?: true
    egt4?: true
    egt5?: true
    egt6?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaspiDataCountAggregateInputType = {
    id?: true
    raspiId?: true
    cht1?: true
    cht2?: true
    cht3?: true
    cht4?: true
    cht5?: true
    cht6?: true
    egt1?: true
    egt2?: true
    egt3?: true
    egt4?: true
    egt5?: true
    egt6?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RaspiDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaspiData to aggregate.
     */
    where?: RaspiDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaspiData to fetch.
     */
    orderBy?: RaspiDataOrderByWithRelationInput | RaspiDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaspiDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaspiData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaspiData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaspiData
    **/
    _count?: true | RaspiDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaspiDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaspiDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaspiDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaspiDataMaxAggregateInputType
  }

  export type GetRaspiDataAggregateType<T extends RaspiDataAggregateArgs> = {
        [P in keyof T & keyof AggregateRaspiData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaspiData[P]>
      : GetScalarType<T[P], AggregateRaspiData[P]>
  }




  export type RaspiDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaspiDataWhereInput
    orderBy?: RaspiDataOrderByWithAggregationInput | RaspiDataOrderByWithAggregationInput[]
    by: RaspiDataScalarFieldEnum[] | RaspiDataScalarFieldEnum
    having?: RaspiDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaspiDataCountAggregateInputType | true
    _avg?: RaspiDataAvgAggregateInputType
    _sum?: RaspiDataSumAggregateInputType
    _min?: RaspiDataMinAggregateInputType
    _max?: RaspiDataMaxAggregateInputType
  }

  export type RaspiDataGroupByOutputType = {
    id: string
    raspiId: string
    cht1: number | null
    cht2: number | null
    cht3: number | null
    cht4: number | null
    cht5: number | null
    cht6: number | null
    egt1: number | null
    egt2: number | null
    egt3: number | null
    egt4: number | null
    egt5: number | null
    egt6: number | null
    createdAt: Date
    updatedAt: Date
    _count: RaspiDataCountAggregateOutputType | null
    _avg: RaspiDataAvgAggregateOutputType | null
    _sum: RaspiDataSumAggregateOutputType | null
    _min: RaspiDataMinAggregateOutputType | null
    _max: RaspiDataMaxAggregateOutputType | null
  }

  type GetRaspiDataGroupByPayload<T extends RaspiDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaspiDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaspiDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaspiDataGroupByOutputType[P]>
            : GetScalarType<T[P], RaspiDataGroupByOutputType[P]>
        }
      >
    >


  export type RaspiDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raspiId?: boolean
    cht1?: boolean
    cht2?: boolean
    cht3?: boolean
    cht4?: boolean
    cht5?: boolean
    cht6?: boolean
    egt1?: boolean
    egt2?: boolean
    egt3?: boolean
    egt4?: boolean
    egt5?: boolean
    egt6?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    raspi?: boolean | RaspiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raspiData"]>

  export type RaspiDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raspiId?: boolean
    cht1?: boolean
    cht2?: boolean
    cht3?: boolean
    cht4?: boolean
    cht5?: boolean
    cht6?: boolean
    egt1?: boolean
    egt2?: boolean
    egt3?: boolean
    egt4?: boolean
    egt5?: boolean
    egt6?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    raspi?: boolean | RaspiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raspiData"]>

  export type RaspiDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raspiId?: boolean
    cht1?: boolean
    cht2?: boolean
    cht3?: boolean
    cht4?: boolean
    cht5?: boolean
    cht6?: boolean
    egt1?: boolean
    egt2?: boolean
    egt3?: boolean
    egt4?: boolean
    egt5?: boolean
    egt6?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    raspi?: boolean | RaspiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raspiData"]>

  export type RaspiDataSelectScalar = {
    id?: boolean
    raspiId?: boolean
    cht1?: boolean
    cht2?: boolean
    cht3?: boolean
    cht4?: boolean
    cht5?: boolean
    cht6?: boolean
    egt1?: boolean
    egt2?: boolean
    egt3?: boolean
    egt4?: boolean
    egt5?: boolean
    egt6?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RaspiDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raspiId" | "cht1" | "cht2" | "cht3" | "cht4" | "cht5" | "cht6" | "egt1" | "egt2" | "egt3" | "egt4" | "egt5" | "egt6" | "createdAt" | "updatedAt", ExtArgs["result"]["raspiData"]>
  export type RaspiDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raspi?: boolean | RaspiDefaultArgs<ExtArgs>
  }
  export type RaspiDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raspi?: boolean | RaspiDefaultArgs<ExtArgs>
  }
  export type RaspiDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raspi?: boolean | RaspiDefaultArgs<ExtArgs>
  }

  export type $RaspiDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaspiData"
    objects: {
      raspi: Prisma.$RaspiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raspiId: string
      cht1: number | null
      cht2: number | null
      cht3: number | null
      cht4: number | null
      cht5: number | null
      cht6: number | null
      egt1: number | null
      egt2: number | null
      egt3: number | null
      egt4: number | null
      egt5: number | null
      egt6: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["raspiData"]>
    composites: {}
  }

  type RaspiDataGetPayload<S extends boolean | null | undefined | RaspiDataDefaultArgs> = $Result.GetResult<Prisma.$RaspiDataPayload, S>

  type RaspiDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaspiDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaspiDataCountAggregateInputType | true
    }

  export interface RaspiDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaspiData'], meta: { name: 'RaspiData' } }
    /**
     * Find zero or one RaspiData that matches the filter.
     * @param {RaspiDataFindUniqueArgs} args - Arguments to find a RaspiData
     * @example
     * // Get one RaspiData
     * const raspiData = await prisma.raspiData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaspiDataFindUniqueArgs>(args: SelectSubset<T, RaspiDataFindUniqueArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaspiData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaspiDataFindUniqueOrThrowArgs} args - Arguments to find a RaspiData
     * @example
     * // Get one RaspiData
     * const raspiData = await prisma.raspiData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaspiDataFindUniqueOrThrowArgs>(args: SelectSubset<T, RaspiDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaspiData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiDataFindFirstArgs} args - Arguments to find a RaspiData
     * @example
     * // Get one RaspiData
     * const raspiData = await prisma.raspiData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaspiDataFindFirstArgs>(args?: SelectSubset<T, RaspiDataFindFirstArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaspiData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiDataFindFirstOrThrowArgs} args - Arguments to find a RaspiData
     * @example
     * // Get one RaspiData
     * const raspiData = await prisma.raspiData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaspiDataFindFirstOrThrowArgs>(args?: SelectSubset<T, RaspiDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaspiData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaspiData
     * const raspiData = await prisma.raspiData.findMany()
     * 
     * // Get first 10 RaspiData
     * const raspiData = await prisma.raspiData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raspiDataWithIdOnly = await prisma.raspiData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaspiDataFindManyArgs>(args?: SelectSubset<T, RaspiDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaspiData.
     * @param {RaspiDataCreateArgs} args - Arguments to create a RaspiData.
     * @example
     * // Create one RaspiData
     * const RaspiData = await prisma.raspiData.create({
     *   data: {
     *     // ... data to create a RaspiData
     *   }
     * })
     * 
     */
    create<T extends RaspiDataCreateArgs>(args: SelectSubset<T, RaspiDataCreateArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaspiData.
     * @param {RaspiDataCreateManyArgs} args - Arguments to create many RaspiData.
     * @example
     * // Create many RaspiData
     * const raspiData = await prisma.raspiData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaspiDataCreateManyArgs>(args?: SelectSubset<T, RaspiDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaspiData and returns the data saved in the database.
     * @param {RaspiDataCreateManyAndReturnArgs} args - Arguments to create many RaspiData.
     * @example
     * // Create many RaspiData
     * const raspiData = await prisma.raspiData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaspiData and only return the `id`
     * const raspiDataWithIdOnly = await prisma.raspiData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaspiDataCreateManyAndReturnArgs>(args?: SelectSubset<T, RaspiDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaspiData.
     * @param {RaspiDataDeleteArgs} args - Arguments to delete one RaspiData.
     * @example
     * // Delete one RaspiData
     * const RaspiData = await prisma.raspiData.delete({
     *   where: {
     *     // ... filter to delete one RaspiData
     *   }
     * })
     * 
     */
    delete<T extends RaspiDataDeleteArgs>(args: SelectSubset<T, RaspiDataDeleteArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaspiData.
     * @param {RaspiDataUpdateArgs} args - Arguments to update one RaspiData.
     * @example
     * // Update one RaspiData
     * const raspiData = await prisma.raspiData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaspiDataUpdateArgs>(args: SelectSubset<T, RaspiDataUpdateArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaspiData.
     * @param {RaspiDataDeleteManyArgs} args - Arguments to filter RaspiData to delete.
     * @example
     * // Delete a few RaspiData
     * const { count } = await prisma.raspiData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaspiDataDeleteManyArgs>(args?: SelectSubset<T, RaspiDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaspiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaspiData
     * const raspiData = await prisma.raspiData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaspiDataUpdateManyArgs>(args: SelectSubset<T, RaspiDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaspiData and returns the data updated in the database.
     * @param {RaspiDataUpdateManyAndReturnArgs} args - Arguments to update many RaspiData.
     * @example
     * // Update many RaspiData
     * const raspiData = await prisma.raspiData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaspiData and only return the `id`
     * const raspiDataWithIdOnly = await prisma.raspiData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaspiDataUpdateManyAndReturnArgs>(args: SelectSubset<T, RaspiDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaspiData.
     * @param {RaspiDataUpsertArgs} args - Arguments to update or create a RaspiData.
     * @example
     * // Update or create a RaspiData
     * const raspiData = await prisma.raspiData.upsert({
     *   create: {
     *     // ... data to create a RaspiData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaspiData we want to update
     *   }
     * })
     */
    upsert<T extends RaspiDataUpsertArgs>(args: SelectSubset<T, RaspiDataUpsertArgs<ExtArgs>>): Prisma__RaspiDataClient<$Result.GetResult<Prisma.$RaspiDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaspiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiDataCountArgs} args - Arguments to filter RaspiData to count.
     * @example
     * // Count the number of RaspiData
     * const count = await prisma.raspiData.count({
     *   where: {
     *     // ... the filter for the RaspiData we want to count
     *   }
     * })
    **/
    count<T extends RaspiDataCountArgs>(
      args?: Subset<T, RaspiDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaspiDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaspiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaspiDataAggregateArgs>(args: Subset<T, RaspiDataAggregateArgs>): Prisma.PrismaPromise<GetRaspiDataAggregateType<T>>

    /**
     * Group by RaspiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaspiDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaspiDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaspiDataGroupByArgs['orderBy'] }
        : { orderBy?: RaspiDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaspiDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaspiDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaspiData model
   */
  readonly fields: RaspiDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaspiData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaspiDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    raspi<T extends RaspiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaspiDefaultArgs<ExtArgs>>): Prisma__RaspiClient<$Result.GetResult<Prisma.$RaspiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaspiData model
   */
  interface RaspiDataFieldRefs {
    readonly id: FieldRef<"RaspiData", 'String'>
    readonly raspiId: FieldRef<"RaspiData", 'String'>
    readonly cht1: FieldRef<"RaspiData", 'Float'>
    readonly cht2: FieldRef<"RaspiData", 'Float'>
    readonly cht3: FieldRef<"RaspiData", 'Float'>
    readonly cht4: FieldRef<"RaspiData", 'Float'>
    readonly cht5: FieldRef<"RaspiData", 'Float'>
    readonly cht6: FieldRef<"RaspiData", 'Float'>
    readonly egt1: FieldRef<"RaspiData", 'Float'>
    readonly egt2: FieldRef<"RaspiData", 'Float'>
    readonly egt3: FieldRef<"RaspiData", 'Float'>
    readonly egt4: FieldRef<"RaspiData", 'Float'>
    readonly egt5: FieldRef<"RaspiData", 'Float'>
    readonly egt6: FieldRef<"RaspiData", 'Float'>
    readonly createdAt: FieldRef<"RaspiData", 'DateTime'>
    readonly updatedAt: FieldRef<"RaspiData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaspiData findUnique
   */
  export type RaspiDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * Filter, which RaspiData to fetch.
     */
    where: RaspiDataWhereUniqueInput
  }

  /**
   * RaspiData findUniqueOrThrow
   */
  export type RaspiDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * Filter, which RaspiData to fetch.
     */
    where: RaspiDataWhereUniqueInput
  }

  /**
   * RaspiData findFirst
   */
  export type RaspiDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * Filter, which RaspiData to fetch.
     */
    where?: RaspiDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaspiData to fetch.
     */
    orderBy?: RaspiDataOrderByWithRelationInput | RaspiDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaspiData.
     */
    cursor?: RaspiDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaspiData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaspiData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaspiData.
     */
    distinct?: RaspiDataScalarFieldEnum | RaspiDataScalarFieldEnum[]
  }

  /**
   * RaspiData findFirstOrThrow
   */
  export type RaspiDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * Filter, which RaspiData to fetch.
     */
    where?: RaspiDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaspiData to fetch.
     */
    orderBy?: RaspiDataOrderByWithRelationInput | RaspiDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaspiData.
     */
    cursor?: RaspiDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaspiData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaspiData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaspiData.
     */
    distinct?: RaspiDataScalarFieldEnum | RaspiDataScalarFieldEnum[]
  }

  /**
   * RaspiData findMany
   */
  export type RaspiDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * Filter, which RaspiData to fetch.
     */
    where?: RaspiDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaspiData to fetch.
     */
    orderBy?: RaspiDataOrderByWithRelationInput | RaspiDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaspiData.
     */
    cursor?: RaspiDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaspiData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaspiData.
     */
    skip?: number
    distinct?: RaspiDataScalarFieldEnum | RaspiDataScalarFieldEnum[]
  }

  /**
   * RaspiData create
   */
  export type RaspiDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * The data needed to create a RaspiData.
     */
    data: XOR<RaspiDataCreateInput, RaspiDataUncheckedCreateInput>
  }

  /**
   * RaspiData createMany
   */
  export type RaspiDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaspiData.
     */
    data: RaspiDataCreateManyInput | RaspiDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaspiData createManyAndReturn
   */
  export type RaspiDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * The data used to create many RaspiData.
     */
    data: RaspiDataCreateManyInput | RaspiDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaspiData update
   */
  export type RaspiDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * The data needed to update a RaspiData.
     */
    data: XOR<RaspiDataUpdateInput, RaspiDataUncheckedUpdateInput>
    /**
     * Choose, which RaspiData to update.
     */
    where: RaspiDataWhereUniqueInput
  }

  /**
   * RaspiData updateMany
   */
  export type RaspiDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaspiData.
     */
    data: XOR<RaspiDataUpdateManyMutationInput, RaspiDataUncheckedUpdateManyInput>
    /**
     * Filter which RaspiData to update
     */
    where?: RaspiDataWhereInput
    /**
     * Limit how many RaspiData to update.
     */
    limit?: number
  }

  /**
   * RaspiData updateManyAndReturn
   */
  export type RaspiDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * The data used to update RaspiData.
     */
    data: XOR<RaspiDataUpdateManyMutationInput, RaspiDataUncheckedUpdateManyInput>
    /**
     * Filter which RaspiData to update
     */
    where?: RaspiDataWhereInput
    /**
     * Limit how many RaspiData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaspiData upsert
   */
  export type RaspiDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * The filter to search for the RaspiData to update in case it exists.
     */
    where: RaspiDataWhereUniqueInput
    /**
     * In case the RaspiData found by the `where` argument doesn't exist, create a new RaspiData with this data.
     */
    create: XOR<RaspiDataCreateInput, RaspiDataUncheckedCreateInput>
    /**
     * In case the RaspiData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaspiDataUpdateInput, RaspiDataUncheckedUpdateInput>
  }

  /**
   * RaspiData delete
   */
  export type RaspiDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
    /**
     * Filter which RaspiData to delete.
     */
    where: RaspiDataWhereUniqueInput
  }

  /**
   * RaspiData deleteMany
   */
  export type RaspiDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaspiData to delete
     */
    where?: RaspiDataWhereInput
    /**
     * Limit how many RaspiData to delete.
     */
    limit?: number
  }

  /**
   * RaspiData without action
   */
  export type RaspiDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaspiData
     */
    select?: RaspiDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaspiData
     */
    omit?: RaspiDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaspiDataInclude<ExtArgs> | null
  }


  /**
   * Model TiltData
   */

  export type AggregateTiltData = {
    _count: TiltDataCountAggregateOutputType | null
    _avg: TiltDataAvgAggregateOutputType | null
    _sum: TiltDataSumAggregateOutputType | null
    _min: TiltDataMinAggregateOutputType | null
    _max: TiltDataMaxAggregateOutputType | null
  }

  export type TiltDataAvgAggregateOutputType = {
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    magX: number | null
    magY: number | null
    magZ: number | null
    angleX: number | null
    angleY: number | null
    angleZ: number | null
    quat0: number | null
    quat1: number | null
    quat2: number | null
    quat3: number | null
  }

  export type TiltDataSumAggregateOutputType = {
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    magX: number | null
    magY: number | null
    magZ: number | null
    angleX: number | null
    angleY: number | null
    angleZ: number | null
    quat0: number | null
    quat1: number | null
    quat2: number | null
    quat3: number | null
  }

  export type TiltDataMinAggregateOutputType = {
    id: string | null
    tiltSensorId: string | null
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    magX: number | null
    magY: number | null
    magZ: number | null
    angleX: number | null
    angleY: number | null
    angleZ: number | null
    quat0: number | null
    quat1: number | null
    quat2: number | null
    quat3: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiltDataMaxAggregateOutputType = {
    id: string | null
    tiltSensorId: string | null
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    magX: number | null
    magY: number | null
    magZ: number | null
    angleX: number | null
    angleY: number | null
    angleZ: number | null
    quat0: number | null
    quat1: number | null
    quat2: number | null
    quat3: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiltDataCountAggregateOutputType = {
    id: number
    tiltSensorId: number
    accX: number
    accY: number
    accZ: number
    gyroX: number
    gyroY: number
    gyroZ: number
    magX: number
    magY: number
    magZ: number
    angleX: number
    angleY: number
    angleZ: number
    quat0: number
    quat1: number
    quat2: number
    quat3: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TiltDataAvgAggregateInputType = {
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    magX?: true
    magY?: true
    magZ?: true
    angleX?: true
    angleY?: true
    angleZ?: true
    quat0?: true
    quat1?: true
    quat2?: true
    quat3?: true
  }

  export type TiltDataSumAggregateInputType = {
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    magX?: true
    magY?: true
    magZ?: true
    angleX?: true
    angleY?: true
    angleZ?: true
    quat0?: true
    quat1?: true
    quat2?: true
    quat3?: true
  }

  export type TiltDataMinAggregateInputType = {
    id?: true
    tiltSensorId?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    magX?: true
    magY?: true
    magZ?: true
    angleX?: true
    angleY?: true
    angleZ?: true
    quat0?: true
    quat1?: true
    quat2?: true
    quat3?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiltDataMaxAggregateInputType = {
    id?: true
    tiltSensorId?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    magX?: true
    magY?: true
    magZ?: true
    angleX?: true
    angleY?: true
    angleZ?: true
    quat0?: true
    quat1?: true
    quat2?: true
    quat3?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiltDataCountAggregateInputType = {
    id?: true
    tiltSensorId?: true
    accX?: true
    accY?: true
    accZ?: true
    gyroX?: true
    gyroY?: true
    gyroZ?: true
    magX?: true
    magY?: true
    magZ?: true
    angleX?: true
    angleY?: true
    angleZ?: true
    quat0?: true
    quat1?: true
    quat2?: true
    quat3?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TiltDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiltData to aggregate.
     */
    where?: TiltDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltData to fetch.
     */
    orderBy?: TiltDataOrderByWithRelationInput | TiltDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiltDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiltData
    **/
    _count?: true | TiltDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiltDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiltDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiltDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiltDataMaxAggregateInputType
  }

  export type GetTiltDataAggregateType<T extends TiltDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTiltData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiltData[P]>
      : GetScalarType<T[P], AggregateTiltData[P]>
  }




  export type TiltDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiltDataWhereInput
    orderBy?: TiltDataOrderByWithAggregationInput | TiltDataOrderByWithAggregationInput[]
    by: TiltDataScalarFieldEnum[] | TiltDataScalarFieldEnum
    having?: TiltDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiltDataCountAggregateInputType | true
    _avg?: TiltDataAvgAggregateInputType
    _sum?: TiltDataSumAggregateInputType
    _min?: TiltDataMinAggregateInputType
    _max?: TiltDataMaxAggregateInputType
  }

  export type TiltDataGroupByOutputType = {
    id: string
    tiltSensorId: string
    accX: number | null
    accY: number | null
    accZ: number | null
    gyroX: number | null
    gyroY: number | null
    gyroZ: number | null
    magX: number | null
    magY: number | null
    magZ: number | null
    angleX: number | null
    angleY: number | null
    angleZ: number | null
    quat0: number | null
    quat1: number | null
    quat2: number | null
    quat3: number | null
    createdAt: Date
    updatedAt: Date
    _count: TiltDataCountAggregateOutputType | null
    _avg: TiltDataAvgAggregateOutputType | null
    _sum: TiltDataSumAggregateOutputType | null
    _min: TiltDataMinAggregateOutputType | null
    _max: TiltDataMaxAggregateOutputType | null
  }

  type GetTiltDataGroupByPayload<T extends TiltDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiltDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiltDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiltDataGroupByOutputType[P]>
            : GetScalarType<T[P], TiltDataGroupByOutputType[P]>
        }
      >
    >


  export type TiltDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tiltSensorId?: boolean
    accX?: boolean
    accY?: boolean
    accZ?: boolean
    gyroX?: boolean
    gyroY?: boolean
    gyroZ?: boolean
    magX?: boolean
    magY?: boolean
    magZ?: boolean
    angleX?: boolean
    angleY?: boolean
    angleZ?: boolean
    quat0?: boolean
    quat1?: boolean
    quat2?: boolean
    quat3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tiltSensor?: boolean | TiltSensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiltData"]>

  export type TiltDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tiltSensorId?: boolean
    accX?: boolean
    accY?: boolean
    accZ?: boolean
    gyroX?: boolean
    gyroY?: boolean
    gyroZ?: boolean
    magX?: boolean
    magY?: boolean
    magZ?: boolean
    angleX?: boolean
    angleY?: boolean
    angleZ?: boolean
    quat0?: boolean
    quat1?: boolean
    quat2?: boolean
    quat3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tiltSensor?: boolean | TiltSensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiltData"]>

  export type TiltDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tiltSensorId?: boolean
    accX?: boolean
    accY?: boolean
    accZ?: boolean
    gyroX?: boolean
    gyroY?: boolean
    gyroZ?: boolean
    magX?: boolean
    magY?: boolean
    magZ?: boolean
    angleX?: boolean
    angleY?: boolean
    angleZ?: boolean
    quat0?: boolean
    quat1?: boolean
    quat2?: boolean
    quat3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tiltSensor?: boolean | TiltSensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiltData"]>

  export type TiltDataSelectScalar = {
    id?: boolean
    tiltSensorId?: boolean
    accX?: boolean
    accY?: boolean
    accZ?: boolean
    gyroX?: boolean
    gyroY?: boolean
    gyroZ?: boolean
    magX?: boolean
    magY?: boolean
    magZ?: boolean
    angleX?: boolean
    angleY?: boolean
    angleZ?: boolean
    quat0?: boolean
    quat1?: boolean
    quat2?: boolean
    quat3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TiltDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tiltSensorId" | "accX" | "accY" | "accZ" | "gyroX" | "gyroY" | "gyroZ" | "magX" | "magY" | "magZ" | "angleX" | "angleY" | "angleZ" | "quat0" | "quat1" | "quat2" | "quat3" | "createdAt" | "updatedAt", ExtArgs["result"]["tiltData"]>
  export type TiltDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiltSensor?: boolean | TiltSensorDefaultArgs<ExtArgs>
  }
  export type TiltDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiltSensor?: boolean | TiltSensorDefaultArgs<ExtArgs>
  }
  export type TiltDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiltSensor?: boolean | TiltSensorDefaultArgs<ExtArgs>
  }

  export type $TiltDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiltData"
    objects: {
      tiltSensor: Prisma.$TiltSensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tiltSensorId: string
      accX: number | null
      accY: number | null
      accZ: number | null
      gyroX: number | null
      gyroY: number | null
      gyroZ: number | null
      magX: number | null
      magY: number | null
      magZ: number | null
      angleX: number | null
      angleY: number | null
      angleZ: number | null
      quat0: number | null
      quat1: number | null
      quat2: number | null
      quat3: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tiltData"]>
    composites: {}
  }

  type TiltDataGetPayload<S extends boolean | null | undefined | TiltDataDefaultArgs> = $Result.GetResult<Prisma.$TiltDataPayload, S>

  type TiltDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiltDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiltDataCountAggregateInputType | true
    }

  export interface TiltDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiltData'], meta: { name: 'TiltData' } }
    /**
     * Find zero or one TiltData that matches the filter.
     * @param {TiltDataFindUniqueArgs} args - Arguments to find a TiltData
     * @example
     * // Get one TiltData
     * const tiltData = await prisma.tiltData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiltDataFindUniqueArgs>(args: SelectSubset<T, TiltDataFindUniqueArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiltData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiltDataFindUniqueOrThrowArgs} args - Arguments to find a TiltData
     * @example
     * // Get one TiltData
     * const tiltData = await prisma.tiltData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiltDataFindUniqueOrThrowArgs>(args: SelectSubset<T, TiltDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiltData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltDataFindFirstArgs} args - Arguments to find a TiltData
     * @example
     * // Get one TiltData
     * const tiltData = await prisma.tiltData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiltDataFindFirstArgs>(args?: SelectSubset<T, TiltDataFindFirstArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiltData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltDataFindFirstOrThrowArgs} args - Arguments to find a TiltData
     * @example
     * // Get one TiltData
     * const tiltData = await prisma.tiltData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiltDataFindFirstOrThrowArgs>(args?: SelectSubset<T, TiltDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiltData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiltData
     * const tiltData = await prisma.tiltData.findMany()
     * 
     * // Get first 10 TiltData
     * const tiltData = await prisma.tiltData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiltDataWithIdOnly = await prisma.tiltData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiltDataFindManyArgs>(args?: SelectSubset<T, TiltDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiltData.
     * @param {TiltDataCreateArgs} args - Arguments to create a TiltData.
     * @example
     * // Create one TiltData
     * const TiltData = await prisma.tiltData.create({
     *   data: {
     *     // ... data to create a TiltData
     *   }
     * })
     * 
     */
    create<T extends TiltDataCreateArgs>(args: SelectSubset<T, TiltDataCreateArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiltData.
     * @param {TiltDataCreateManyArgs} args - Arguments to create many TiltData.
     * @example
     * // Create many TiltData
     * const tiltData = await prisma.tiltData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiltDataCreateManyArgs>(args?: SelectSubset<T, TiltDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiltData and returns the data saved in the database.
     * @param {TiltDataCreateManyAndReturnArgs} args - Arguments to create many TiltData.
     * @example
     * // Create many TiltData
     * const tiltData = await prisma.tiltData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiltData and only return the `id`
     * const tiltDataWithIdOnly = await prisma.tiltData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiltDataCreateManyAndReturnArgs>(args?: SelectSubset<T, TiltDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiltData.
     * @param {TiltDataDeleteArgs} args - Arguments to delete one TiltData.
     * @example
     * // Delete one TiltData
     * const TiltData = await prisma.tiltData.delete({
     *   where: {
     *     // ... filter to delete one TiltData
     *   }
     * })
     * 
     */
    delete<T extends TiltDataDeleteArgs>(args: SelectSubset<T, TiltDataDeleteArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiltData.
     * @param {TiltDataUpdateArgs} args - Arguments to update one TiltData.
     * @example
     * // Update one TiltData
     * const tiltData = await prisma.tiltData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiltDataUpdateArgs>(args: SelectSubset<T, TiltDataUpdateArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiltData.
     * @param {TiltDataDeleteManyArgs} args - Arguments to filter TiltData to delete.
     * @example
     * // Delete a few TiltData
     * const { count } = await prisma.tiltData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiltDataDeleteManyArgs>(args?: SelectSubset<T, TiltDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiltData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiltData
     * const tiltData = await prisma.tiltData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiltDataUpdateManyArgs>(args: SelectSubset<T, TiltDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiltData and returns the data updated in the database.
     * @param {TiltDataUpdateManyAndReturnArgs} args - Arguments to update many TiltData.
     * @example
     * // Update many TiltData
     * const tiltData = await prisma.tiltData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiltData and only return the `id`
     * const tiltDataWithIdOnly = await prisma.tiltData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiltDataUpdateManyAndReturnArgs>(args: SelectSubset<T, TiltDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiltData.
     * @param {TiltDataUpsertArgs} args - Arguments to update or create a TiltData.
     * @example
     * // Update or create a TiltData
     * const tiltData = await prisma.tiltData.upsert({
     *   create: {
     *     // ... data to create a TiltData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiltData we want to update
     *   }
     * })
     */
    upsert<T extends TiltDataUpsertArgs>(args: SelectSubset<T, TiltDataUpsertArgs<ExtArgs>>): Prisma__TiltDataClient<$Result.GetResult<Prisma.$TiltDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiltData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltDataCountArgs} args - Arguments to filter TiltData to count.
     * @example
     * // Count the number of TiltData
     * const count = await prisma.tiltData.count({
     *   where: {
     *     // ... the filter for the TiltData we want to count
     *   }
     * })
    **/
    count<T extends TiltDataCountArgs>(
      args?: Subset<T, TiltDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiltDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiltData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiltDataAggregateArgs>(args: Subset<T, TiltDataAggregateArgs>): Prisma.PrismaPromise<GetTiltDataAggregateType<T>>

    /**
     * Group by TiltData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiltDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiltDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiltDataGroupByArgs['orderBy'] }
        : { orderBy?: TiltDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiltDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiltDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiltData model
   */
  readonly fields: TiltDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiltData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiltDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiltSensor<T extends TiltSensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiltSensorDefaultArgs<ExtArgs>>): Prisma__TiltSensorClient<$Result.GetResult<Prisma.$TiltSensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiltData model
   */
  interface TiltDataFieldRefs {
    readonly id: FieldRef<"TiltData", 'String'>
    readonly tiltSensorId: FieldRef<"TiltData", 'String'>
    readonly accX: FieldRef<"TiltData", 'Float'>
    readonly accY: FieldRef<"TiltData", 'Float'>
    readonly accZ: FieldRef<"TiltData", 'Float'>
    readonly gyroX: FieldRef<"TiltData", 'Float'>
    readonly gyroY: FieldRef<"TiltData", 'Float'>
    readonly gyroZ: FieldRef<"TiltData", 'Float'>
    readonly magX: FieldRef<"TiltData", 'Float'>
    readonly magY: FieldRef<"TiltData", 'Float'>
    readonly magZ: FieldRef<"TiltData", 'Float'>
    readonly angleX: FieldRef<"TiltData", 'Float'>
    readonly angleY: FieldRef<"TiltData", 'Float'>
    readonly angleZ: FieldRef<"TiltData", 'Float'>
    readonly quat0: FieldRef<"TiltData", 'Float'>
    readonly quat1: FieldRef<"TiltData", 'Float'>
    readonly quat2: FieldRef<"TiltData", 'Float'>
    readonly quat3: FieldRef<"TiltData", 'Float'>
    readonly createdAt: FieldRef<"TiltData", 'DateTime'>
    readonly updatedAt: FieldRef<"TiltData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TiltData findUnique
   */
  export type TiltDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * Filter, which TiltData to fetch.
     */
    where: TiltDataWhereUniqueInput
  }

  /**
   * TiltData findUniqueOrThrow
   */
  export type TiltDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * Filter, which TiltData to fetch.
     */
    where: TiltDataWhereUniqueInput
  }

  /**
   * TiltData findFirst
   */
  export type TiltDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * Filter, which TiltData to fetch.
     */
    where?: TiltDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltData to fetch.
     */
    orderBy?: TiltDataOrderByWithRelationInput | TiltDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiltData.
     */
    cursor?: TiltDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiltData.
     */
    distinct?: TiltDataScalarFieldEnum | TiltDataScalarFieldEnum[]
  }

  /**
   * TiltData findFirstOrThrow
   */
  export type TiltDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * Filter, which TiltData to fetch.
     */
    where?: TiltDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltData to fetch.
     */
    orderBy?: TiltDataOrderByWithRelationInput | TiltDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiltData.
     */
    cursor?: TiltDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiltData.
     */
    distinct?: TiltDataScalarFieldEnum | TiltDataScalarFieldEnum[]
  }

  /**
   * TiltData findMany
   */
  export type TiltDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * Filter, which TiltData to fetch.
     */
    where?: TiltDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiltData to fetch.
     */
    orderBy?: TiltDataOrderByWithRelationInput | TiltDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiltData.
     */
    cursor?: TiltDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiltData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiltData.
     */
    skip?: number
    distinct?: TiltDataScalarFieldEnum | TiltDataScalarFieldEnum[]
  }

  /**
   * TiltData create
   */
  export type TiltDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * The data needed to create a TiltData.
     */
    data: XOR<TiltDataCreateInput, TiltDataUncheckedCreateInput>
  }

  /**
   * TiltData createMany
   */
  export type TiltDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiltData.
     */
    data: TiltDataCreateManyInput | TiltDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiltData createManyAndReturn
   */
  export type TiltDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * The data used to create many TiltData.
     */
    data: TiltDataCreateManyInput | TiltDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiltData update
   */
  export type TiltDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * The data needed to update a TiltData.
     */
    data: XOR<TiltDataUpdateInput, TiltDataUncheckedUpdateInput>
    /**
     * Choose, which TiltData to update.
     */
    where: TiltDataWhereUniqueInput
  }

  /**
   * TiltData updateMany
   */
  export type TiltDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiltData.
     */
    data: XOR<TiltDataUpdateManyMutationInput, TiltDataUncheckedUpdateManyInput>
    /**
     * Filter which TiltData to update
     */
    where?: TiltDataWhereInput
    /**
     * Limit how many TiltData to update.
     */
    limit?: number
  }

  /**
   * TiltData updateManyAndReturn
   */
  export type TiltDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * The data used to update TiltData.
     */
    data: XOR<TiltDataUpdateManyMutationInput, TiltDataUncheckedUpdateManyInput>
    /**
     * Filter which TiltData to update
     */
    where?: TiltDataWhereInput
    /**
     * Limit how many TiltData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiltData upsert
   */
  export type TiltDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * The filter to search for the TiltData to update in case it exists.
     */
    where: TiltDataWhereUniqueInput
    /**
     * In case the TiltData found by the `where` argument doesn't exist, create a new TiltData with this data.
     */
    create: XOR<TiltDataCreateInput, TiltDataUncheckedCreateInput>
    /**
     * In case the TiltData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiltDataUpdateInput, TiltDataUncheckedUpdateInput>
  }

  /**
   * TiltData delete
   */
  export type TiltDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
    /**
     * Filter which TiltData to delete.
     */
    where: TiltDataWhereUniqueInput
  }

  /**
   * TiltData deleteMany
   */
  export type TiltDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiltData to delete
     */
    where?: TiltDataWhereInput
    /**
     * Limit how many TiltData to delete.
     */
    limit?: number
  }

  /**
   * TiltData without action
   */
  export type TiltDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiltData
     */
    select?: TiltDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiltData
     */
    omit?: TiltDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiltDataInclude<ExtArgs> | null
  }


  /**
   * Model BMSData
   */

  export type AggregateBMSData = {
    _count: BMSDataCountAggregateOutputType | null
    _avg: BMSDataAvgAggregateOutputType | null
    _sum: BMSDataSumAggregateOutputType | null
    _min: BMSDataMinAggregateOutputType | null
    _max: BMSDataMaxAggregateOutputType | null
  }

  export type BMSDataAvgAggregateOutputType = {
    stateOfCharge: number | null
    totalVoltage: number | null
    current: number | null
    power: number | null
    remainingCapacity: number | null
    nominalCapacity: number | null
    chargingCycles: number | null
    deltaCellVoltage: number | null
    cell1Voltage: number | null
    cell2Voltage: number | null
    cell3Voltage: number | null
    cell4Voltage: number | null
    temp1: number | null
    temp2: number | null
  }

  export type BMSDataSumAggregateOutputType = {
    stateOfCharge: number | null
    totalVoltage: number | null
    current: number | null
    power: number | null
    remainingCapacity: number | null
    nominalCapacity: number | null
    chargingCycles: number | null
    deltaCellVoltage: number | null
    cell1Voltage: number | null
    cell2Voltage: number | null
    cell3Voltage: number | null
    cell4Voltage: number | null
    temp1: number | null
    temp2: number | null
  }

  export type BMSDataMinAggregateOutputType = {
    id: string | null
    bmsId: string | null
    stateOfCharge: number | null
    totalVoltage: number | null
    current: number | null
    power: number | null
    remainingCapacity: number | null
    nominalCapacity: number | null
    chargingCycles: number | null
    deltaCellVoltage: number | null
    softwareVersion: string | null
    errors: string | null
    balancingActive: boolean | null
    cell1Voltage: number | null
    cell2Voltage: number | null
    cell3Voltage: number | null
    cell4Voltage: number | null
    temp1: number | null
    temp2: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BMSDataMaxAggregateOutputType = {
    id: string | null
    bmsId: string | null
    stateOfCharge: number | null
    totalVoltage: number | null
    current: number | null
    power: number | null
    remainingCapacity: number | null
    nominalCapacity: number | null
    chargingCycles: number | null
    deltaCellVoltage: number | null
    softwareVersion: string | null
    errors: string | null
    balancingActive: boolean | null
    cell1Voltage: number | null
    cell2Voltage: number | null
    cell3Voltage: number | null
    cell4Voltage: number | null
    temp1: number | null
    temp2: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BMSDataCountAggregateOutputType = {
    id: number
    bmsId: number
    stateOfCharge: number
    totalVoltage: number
    current: number
    power: number
    remainingCapacity: number
    nominalCapacity: number
    chargingCycles: number
    deltaCellVoltage: number
    softwareVersion: number
    errors: number
    balancingActive: number
    cell1Voltage: number
    cell2Voltage: number
    cell3Voltage: number
    cell4Voltage: number
    temp1: number
    temp2: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BMSDataAvgAggregateInputType = {
    stateOfCharge?: true
    totalVoltage?: true
    current?: true
    power?: true
    remainingCapacity?: true
    nominalCapacity?: true
    chargingCycles?: true
    deltaCellVoltage?: true
    cell1Voltage?: true
    cell2Voltage?: true
    cell3Voltage?: true
    cell4Voltage?: true
    temp1?: true
    temp2?: true
  }

  export type BMSDataSumAggregateInputType = {
    stateOfCharge?: true
    totalVoltage?: true
    current?: true
    power?: true
    remainingCapacity?: true
    nominalCapacity?: true
    chargingCycles?: true
    deltaCellVoltage?: true
    cell1Voltage?: true
    cell2Voltage?: true
    cell3Voltage?: true
    cell4Voltage?: true
    temp1?: true
    temp2?: true
  }

  export type BMSDataMinAggregateInputType = {
    id?: true
    bmsId?: true
    stateOfCharge?: true
    totalVoltage?: true
    current?: true
    power?: true
    remainingCapacity?: true
    nominalCapacity?: true
    chargingCycles?: true
    deltaCellVoltage?: true
    softwareVersion?: true
    errors?: true
    balancingActive?: true
    cell1Voltage?: true
    cell2Voltage?: true
    cell3Voltage?: true
    cell4Voltage?: true
    temp1?: true
    temp2?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BMSDataMaxAggregateInputType = {
    id?: true
    bmsId?: true
    stateOfCharge?: true
    totalVoltage?: true
    current?: true
    power?: true
    remainingCapacity?: true
    nominalCapacity?: true
    chargingCycles?: true
    deltaCellVoltage?: true
    softwareVersion?: true
    errors?: true
    balancingActive?: true
    cell1Voltage?: true
    cell2Voltage?: true
    cell3Voltage?: true
    cell4Voltage?: true
    temp1?: true
    temp2?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BMSDataCountAggregateInputType = {
    id?: true
    bmsId?: true
    stateOfCharge?: true
    totalVoltage?: true
    current?: true
    power?: true
    remainingCapacity?: true
    nominalCapacity?: true
    chargingCycles?: true
    deltaCellVoltage?: true
    softwareVersion?: true
    errors?: true
    balancingActive?: true
    cell1Voltage?: true
    cell2Voltage?: true
    cell3Voltage?: true
    cell4Voltage?: true
    temp1?: true
    temp2?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BMSDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BMSData to aggregate.
     */
    where?: BMSDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMSData to fetch.
     */
    orderBy?: BMSDataOrderByWithRelationInput | BMSDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BMSDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMSData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMSData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BMSData
    **/
    _count?: true | BMSDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BMSDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BMSDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BMSDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BMSDataMaxAggregateInputType
  }

  export type GetBMSDataAggregateType<T extends BMSDataAggregateArgs> = {
        [P in keyof T & keyof AggregateBMSData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBMSData[P]>
      : GetScalarType<T[P], AggregateBMSData[P]>
  }




  export type BMSDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BMSDataWhereInput
    orderBy?: BMSDataOrderByWithAggregationInput | BMSDataOrderByWithAggregationInput[]
    by: BMSDataScalarFieldEnum[] | BMSDataScalarFieldEnum
    having?: BMSDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BMSDataCountAggregateInputType | true
    _avg?: BMSDataAvgAggregateInputType
    _sum?: BMSDataSumAggregateInputType
    _min?: BMSDataMinAggregateInputType
    _max?: BMSDataMaxAggregateInputType
  }

  export type BMSDataGroupByOutputType = {
    id: string
    bmsId: string
    stateOfCharge: number | null
    totalVoltage: number | null
    current: number | null
    power: number | null
    remainingCapacity: number | null
    nominalCapacity: number | null
    chargingCycles: number | null
    deltaCellVoltage: number | null
    softwareVersion: string | null
    errors: string | null
    balancingActive: boolean | null
    cell1Voltage: number | null
    cell2Voltage: number | null
    cell3Voltage: number | null
    cell4Voltage: number | null
    temp1: number | null
    temp2: number | null
    createdAt: Date
    updatedAt: Date
    _count: BMSDataCountAggregateOutputType | null
    _avg: BMSDataAvgAggregateOutputType | null
    _sum: BMSDataSumAggregateOutputType | null
    _min: BMSDataMinAggregateOutputType | null
    _max: BMSDataMaxAggregateOutputType | null
  }

  type GetBMSDataGroupByPayload<T extends BMSDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BMSDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BMSDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BMSDataGroupByOutputType[P]>
            : GetScalarType<T[P], BMSDataGroupByOutputType[P]>
        }
      >
    >


  export type BMSDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bmsId?: boolean
    stateOfCharge?: boolean
    totalVoltage?: boolean
    current?: boolean
    power?: boolean
    remainingCapacity?: boolean
    nominalCapacity?: boolean
    chargingCycles?: boolean
    deltaCellVoltage?: boolean
    softwareVersion?: boolean
    errors?: boolean
    balancingActive?: boolean
    cell1Voltage?: boolean
    cell2Voltage?: boolean
    cell3Voltage?: boolean
    cell4Voltage?: boolean
    temp1?: boolean
    temp2?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bms?: boolean | BMSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bMSData"]>

  export type BMSDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bmsId?: boolean
    stateOfCharge?: boolean
    totalVoltage?: boolean
    current?: boolean
    power?: boolean
    remainingCapacity?: boolean
    nominalCapacity?: boolean
    chargingCycles?: boolean
    deltaCellVoltage?: boolean
    softwareVersion?: boolean
    errors?: boolean
    balancingActive?: boolean
    cell1Voltage?: boolean
    cell2Voltage?: boolean
    cell3Voltage?: boolean
    cell4Voltage?: boolean
    temp1?: boolean
    temp2?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bms?: boolean | BMSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bMSData"]>

  export type BMSDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bmsId?: boolean
    stateOfCharge?: boolean
    totalVoltage?: boolean
    current?: boolean
    power?: boolean
    remainingCapacity?: boolean
    nominalCapacity?: boolean
    chargingCycles?: boolean
    deltaCellVoltage?: boolean
    softwareVersion?: boolean
    errors?: boolean
    balancingActive?: boolean
    cell1Voltage?: boolean
    cell2Voltage?: boolean
    cell3Voltage?: boolean
    cell4Voltage?: boolean
    temp1?: boolean
    temp2?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bms?: boolean | BMSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bMSData"]>

  export type BMSDataSelectScalar = {
    id?: boolean
    bmsId?: boolean
    stateOfCharge?: boolean
    totalVoltage?: boolean
    current?: boolean
    power?: boolean
    remainingCapacity?: boolean
    nominalCapacity?: boolean
    chargingCycles?: boolean
    deltaCellVoltage?: boolean
    softwareVersion?: boolean
    errors?: boolean
    balancingActive?: boolean
    cell1Voltage?: boolean
    cell2Voltage?: boolean
    cell3Voltage?: boolean
    cell4Voltage?: boolean
    temp1?: boolean
    temp2?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BMSDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bmsId" | "stateOfCharge" | "totalVoltage" | "current" | "power" | "remainingCapacity" | "nominalCapacity" | "chargingCycles" | "deltaCellVoltage" | "softwareVersion" | "errors" | "balancingActive" | "cell1Voltage" | "cell2Voltage" | "cell3Voltage" | "cell4Voltage" | "temp1" | "temp2" | "createdAt" | "updatedAt", ExtArgs["result"]["bMSData"]>
  export type BMSDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bms?: boolean | BMSDefaultArgs<ExtArgs>
  }
  export type BMSDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bms?: boolean | BMSDefaultArgs<ExtArgs>
  }
  export type BMSDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bms?: boolean | BMSDefaultArgs<ExtArgs>
  }

  export type $BMSDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BMSData"
    objects: {
      bms: Prisma.$BMSPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bmsId: string
      stateOfCharge: number | null
      totalVoltage: number | null
      current: number | null
      power: number | null
      remainingCapacity: number | null
      nominalCapacity: number | null
      chargingCycles: number | null
      deltaCellVoltage: number | null
      softwareVersion: string | null
      errors: string | null
      balancingActive: boolean | null
      cell1Voltage: number | null
      cell2Voltage: number | null
      cell3Voltage: number | null
      cell4Voltage: number | null
      temp1: number | null
      temp2: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bMSData"]>
    composites: {}
  }

  type BMSDataGetPayload<S extends boolean | null | undefined | BMSDataDefaultArgs> = $Result.GetResult<Prisma.$BMSDataPayload, S>

  type BMSDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BMSDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BMSDataCountAggregateInputType | true
    }

  export interface BMSDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BMSData'], meta: { name: 'BMSData' } }
    /**
     * Find zero or one BMSData that matches the filter.
     * @param {BMSDataFindUniqueArgs} args - Arguments to find a BMSData
     * @example
     * // Get one BMSData
     * const bMSData = await prisma.bMSData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BMSDataFindUniqueArgs>(args: SelectSubset<T, BMSDataFindUniqueArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BMSData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BMSDataFindUniqueOrThrowArgs} args - Arguments to find a BMSData
     * @example
     * // Get one BMSData
     * const bMSData = await prisma.bMSData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BMSDataFindUniqueOrThrowArgs>(args: SelectSubset<T, BMSDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BMSData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSDataFindFirstArgs} args - Arguments to find a BMSData
     * @example
     * // Get one BMSData
     * const bMSData = await prisma.bMSData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BMSDataFindFirstArgs>(args?: SelectSubset<T, BMSDataFindFirstArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BMSData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSDataFindFirstOrThrowArgs} args - Arguments to find a BMSData
     * @example
     * // Get one BMSData
     * const bMSData = await prisma.bMSData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BMSDataFindFirstOrThrowArgs>(args?: SelectSubset<T, BMSDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BMSData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BMSData
     * const bMSData = await prisma.bMSData.findMany()
     * 
     * // Get first 10 BMSData
     * const bMSData = await prisma.bMSData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bMSDataWithIdOnly = await prisma.bMSData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BMSDataFindManyArgs>(args?: SelectSubset<T, BMSDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BMSData.
     * @param {BMSDataCreateArgs} args - Arguments to create a BMSData.
     * @example
     * // Create one BMSData
     * const BMSData = await prisma.bMSData.create({
     *   data: {
     *     // ... data to create a BMSData
     *   }
     * })
     * 
     */
    create<T extends BMSDataCreateArgs>(args: SelectSubset<T, BMSDataCreateArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BMSData.
     * @param {BMSDataCreateManyArgs} args - Arguments to create many BMSData.
     * @example
     * // Create many BMSData
     * const bMSData = await prisma.bMSData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BMSDataCreateManyArgs>(args?: SelectSubset<T, BMSDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BMSData and returns the data saved in the database.
     * @param {BMSDataCreateManyAndReturnArgs} args - Arguments to create many BMSData.
     * @example
     * // Create many BMSData
     * const bMSData = await prisma.bMSData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BMSData and only return the `id`
     * const bMSDataWithIdOnly = await prisma.bMSData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BMSDataCreateManyAndReturnArgs>(args?: SelectSubset<T, BMSDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BMSData.
     * @param {BMSDataDeleteArgs} args - Arguments to delete one BMSData.
     * @example
     * // Delete one BMSData
     * const BMSData = await prisma.bMSData.delete({
     *   where: {
     *     // ... filter to delete one BMSData
     *   }
     * })
     * 
     */
    delete<T extends BMSDataDeleteArgs>(args: SelectSubset<T, BMSDataDeleteArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BMSData.
     * @param {BMSDataUpdateArgs} args - Arguments to update one BMSData.
     * @example
     * // Update one BMSData
     * const bMSData = await prisma.bMSData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BMSDataUpdateArgs>(args: SelectSubset<T, BMSDataUpdateArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BMSData.
     * @param {BMSDataDeleteManyArgs} args - Arguments to filter BMSData to delete.
     * @example
     * // Delete a few BMSData
     * const { count } = await prisma.bMSData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BMSDataDeleteManyArgs>(args?: SelectSubset<T, BMSDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BMSData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BMSData
     * const bMSData = await prisma.bMSData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BMSDataUpdateManyArgs>(args: SelectSubset<T, BMSDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BMSData and returns the data updated in the database.
     * @param {BMSDataUpdateManyAndReturnArgs} args - Arguments to update many BMSData.
     * @example
     * // Update many BMSData
     * const bMSData = await prisma.bMSData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BMSData and only return the `id`
     * const bMSDataWithIdOnly = await prisma.bMSData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BMSDataUpdateManyAndReturnArgs>(args: SelectSubset<T, BMSDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BMSData.
     * @param {BMSDataUpsertArgs} args - Arguments to update or create a BMSData.
     * @example
     * // Update or create a BMSData
     * const bMSData = await prisma.bMSData.upsert({
     *   create: {
     *     // ... data to create a BMSData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BMSData we want to update
     *   }
     * })
     */
    upsert<T extends BMSDataUpsertArgs>(args: SelectSubset<T, BMSDataUpsertArgs<ExtArgs>>): Prisma__BMSDataClient<$Result.GetResult<Prisma.$BMSDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BMSData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSDataCountArgs} args - Arguments to filter BMSData to count.
     * @example
     * // Count the number of BMSData
     * const count = await prisma.bMSData.count({
     *   where: {
     *     // ... the filter for the BMSData we want to count
     *   }
     * })
    **/
    count<T extends BMSDataCountArgs>(
      args?: Subset<T, BMSDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BMSDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BMSData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BMSDataAggregateArgs>(args: Subset<T, BMSDataAggregateArgs>): Prisma.PrismaPromise<GetBMSDataAggregateType<T>>

    /**
     * Group by BMSData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BMSDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BMSDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BMSDataGroupByArgs['orderBy'] }
        : { orderBy?: BMSDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BMSDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBMSDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BMSData model
   */
  readonly fields: BMSDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BMSData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BMSDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bms<T extends BMSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BMSDefaultArgs<ExtArgs>>): Prisma__BMSClient<$Result.GetResult<Prisma.$BMSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BMSData model
   */
  interface BMSDataFieldRefs {
    readonly id: FieldRef<"BMSData", 'String'>
    readonly bmsId: FieldRef<"BMSData", 'String'>
    readonly stateOfCharge: FieldRef<"BMSData", 'Float'>
    readonly totalVoltage: FieldRef<"BMSData", 'Float'>
    readonly current: FieldRef<"BMSData", 'Float'>
    readonly power: FieldRef<"BMSData", 'Float'>
    readonly remainingCapacity: FieldRef<"BMSData", 'Float'>
    readonly nominalCapacity: FieldRef<"BMSData", 'Float'>
    readonly chargingCycles: FieldRef<"BMSData", 'Int'>
    readonly deltaCellVoltage: FieldRef<"BMSData", 'Float'>
    readonly softwareVersion: FieldRef<"BMSData", 'String'>
    readonly errors: FieldRef<"BMSData", 'String'>
    readonly balancingActive: FieldRef<"BMSData", 'Boolean'>
    readonly cell1Voltage: FieldRef<"BMSData", 'Float'>
    readonly cell2Voltage: FieldRef<"BMSData", 'Float'>
    readonly cell3Voltage: FieldRef<"BMSData", 'Float'>
    readonly cell4Voltage: FieldRef<"BMSData", 'Float'>
    readonly temp1: FieldRef<"BMSData", 'Float'>
    readonly temp2: FieldRef<"BMSData", 'Float'>
    readonly createdAt: FieldRef<"BMSData", 'DateTime'>
    readonly updatedAt: FieldRef<"BMSData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BMSData findUnique
   */
  export type BMSDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * Filter, which BMSData to fetch.
     */
    where: BMSDataWhereUniqueInput
  }

  /**
   * BMSData findUniqueOrThrow
   */
  export type BMSDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * Filter, which BMSData to fetch.
     */
    where: BMSDataWhereUniqueInput
  }

  /**
   * BMSData findFirst
   */
  export type BMSDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * Filter, which BMSData to fetch.
     */
    where?: BMSDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMSData to fetch.
     */
    orderBy?: BMSDataOrderByWithRelationInput | BMSDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BMSData.
     */
    cursor?: BMSDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMSData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMSData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BMSData.
     */
    distinct?: BMSDataScalarFieldEnum | BMSDataScalarFieldEnum[]
  }

  /**
   * BMSData findFirstOrThrow
   */
  export type BMSDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * Filter, which BMSData to fetch.
     */
    where?: BMSDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMSData to fetch.
     */
    orderBy?: BMSDataOrderByWithRelationInput | BMSDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BMSData.
     */
    cursor?: BMSDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMSData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMSData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BMSData.
     */
    distinct?: BMSDataScalarFieldEnum | BMSDataScalarFieldEnum[]
  }

  /**
   * BMSData findMany
   */
  export type BMSDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * Filter, which BMSData to fetch.
     */
    where?: BMSDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BMSData to fetch.
     */
    orderBy?: BMSDataOrderByWithRelationInput | BMSDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BMSData.
     */
    cursor?: BMSDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BMSData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BMSData.
     */
    skip?: number
    distinct?: BMSDataScalarFieldEnum | BMSDataScalarFieldEnum[]
  }

  /**
   * BMSData create
   */
  export type BMSDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * The data needed to create a BMSData.
     */
    data: XOR<BMSDataCreateInput, BMSDataUncheckedCreateInput>
  }

  /**
   * BMSData createMany
   */
  export type BMSDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BMSData.
     */
    data: BMSDataCreateManyInput | BMSDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BMSData createManyAndReturn
   */
  export type BMSDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * The data used to create many BMSData.
     */
    data: BMSDataCreateManyInput | BMSDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BMSData update
   */
  export type BMSDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * The data needed to update a BMSData.
     */
    data: XOR<BMSDataUpdateInput, BMSDataUncheckedUpdateInput>
    /**
     * Choose, which BMSData to update.
     */
    where: BMSDataWhereUniqueInput
  }

  /**
   * BMSData updateMany
   */
  export type BMSDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BMSData.
     */
    data: XOR<BMSDataUpdateManyMutationInput, BMSDataUncheckedUpdateManyInput>
    /**
     * Filter which BMSData to update
     */
    where?: BMSDataWhereInput
    /**
     * Limit how many BMSData to update.
     */
    limit?: number
  }

  /**
   * BMSData updateManyAndReturn
   */
  export type BMSDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * The data used to update BMSData.
     */
    data: XOR<BMSDataUpdateManyMutationInput, BMSDataUncheckedUpdateManyInput>
    /**
     * Filter which BMSData to update
     */
    where?: BMSDataWhereInput
    /**
     * Limit how many BMSData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BMSData upsert
   */
  export type BMSDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * The filter to search for the BMSData to update in case it exists.
     */
    where: BMSDataWhereUniqueInput
    /**
     * In case the BMSData found by the `where` argument doesn't exist, create a new BMSData with this data.
     */
    create: XOR<BMSDataCreateInput, BMSDataUncheckedCreateInput>
    /**
     * In case the BMSData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BMSDataUpdateInput, BMSDataUncheckedUpdateInput>
  }

  /**
   * BMSData delete
   */
  export type BMSDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
    /**
     * Filter which BMSData to delete.
     */
    where: BMSDataWhereUniqueInput
  }

  /**
   * BMSData deleteMany
   */
  export type BMSDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BMSData to delete
     */
    where?: BMSDataWhereInput
    /**
     * Limit how many BMSData to delete.
     */
    limit?: number
  }

  /**
   * BMSData without action
   */
  export type BMSDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BMSData
     */
    select?: BMSDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BMSData
     */
    omit?: BMSDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BMSDataInclude<ExtArgs> | null
  }


  /**
   * Model MopekaData
   */

  export type AggregateMopekaData = {
    _count: MopekaDataCountAggregateOutputType | null
    _avg: MopekaDataAvgAggregateOutputType | null
    _sum: MopekaDataSumAggregateOutputType | null
    _min: MopekaDataMinAggregateOutputType | null
    _max: MopekaDataMaxAggregateOutputType | null
  }

  export type MopekaDataAvgAggregateOutputType = {
    rawBattery: number | null
    batteryVolt: number | null
    batteryPercent: number | null
    rawTemp: number | null
    tempCelsius: number | null
    tempFahrenheit: number | null
    readingQuality: number | null
    tankLevelRaw: number | null
    tankLevelNonCompensatedMm: number | null
    tankLevelNonCompensatedIn: number | null
    tankLevelCompensatedMm: number | null
    tankLevelCompensatedInch: number | null
    accelX: number | null
    accelY: number | null
    angle: number | null
  }

  export type MopekaDataSumAggregateOutputType = {
    rawBattery: number | null
    batteryVolt: number | null
    batteryPercent: number | null
    rawTemp: number | null
    tempCelsius: number | null
    tempFahrenheit: number | null
    readingQuality: number | null
    tankLevelRaw: number | null
    tankLevelNonCompensatedMm: number | null
    tankLevelNonCompensatedIn: number | null
    tankLevelCompensatedMm: number | null
    tankLevelCompensatedInch: number | null
    accelX: number | null
    accelY: number | null
    angle: number | null
  }

  export type MopekaDataMinAggregateOutputType = {
    id: string | null
    mopekaSensorId: string | null
    rawBattery: number | null
    batteryVolt: number | null
    batteryPercent: number | null
    rawTemp: number | null
    tempCelsius: number | null
    tempFahrenheit: number | null
    readingQuality: number | null
    tankLevelRaw: number | null
    tankLevelNonCompensatedMm: number | null
    tankLevelNonCompensatedIn: number | null
    tankLevelCompensatedMm: number | null
    tankLevelCompensatedInch: number | null
    accelX: number | null
    accelY: number | null
    angle: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MopekaDataMaxAggregateOutputType = {
    id: string | null
    mopekaSensorId: string | null
    rawBattery: number | null
    batteryVolt: number | null
    batteryPercent: number | null
    rawTemp: number | null
    tempCelsius: number | null
    tempFahrenheit: number | null
    readingQuality: number | null
    tankLevelRaw: number | null
    tankLevelNonCompensatedMm: number | null
    tankLevelNonCompensatedIn: number | null
    tankLevelCompensatedMm: number | null
    tankLevelCompensatedInch: number | null
    accelX: number | null
    accelY: number | null
    angle: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MopekaDataCountAggregateOutputType = {
    id: number
    mopekaSensorId: number
    rawBattery: number
    batteryVolt: number
    batteryPercent: number
    rawTemp: number
    tempCelsius: number
    tempFahrenheit: number
    readingQuality: number
    tankLevelRaw: number
    tankLevelNonCompensatedMm: number
    tankLevelNonCompensatedIn: number
    tankLevelCompensatedMm: number
    tankLevelCompensatedInch: number
    accelX: number
    accelY: number
    angle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MopekaDataAvgAggregateInputType = {
    rawBattery?: true
    batteryVolt?: true
    batteryPercent?: true
    rawTemp?: true
    tempCelsius?: true
    tempFahrenheit?: true
    readingQuality?: true
    tankLevelRaw?: true
    tankLevelNonCompensatedMm?: true
    tankLevelNonCompensatedIn?: true
    tankLevelCompensatedMm?: true
    tankLevelCompensatedInch?: true
    accelX?: true
    accelY?: true
    angle?: true
  }

  export type MopekaDataSumAggregateInputType = {
    rawBattery?: true
    batteryVolt?: true
    batteryPercent?: true
    rawTemp?: true
    tempCelsius?: true
    tempFahrenheit?: true
    readingQuality?: true
    tankLevelRaw?: true
    tankLevelNonCompensatedMm?: true
    tankLevelNonCompensatedIn?: true
    tankLevelCompensatedMm?: true
    tankLevelCompensatedInch?: true
    accelX?: true
    accelY?: true
    angle?: true
  }

  export type MopekaDataMinAggregateInputType = {
    id?: true
    mopekaSensorId?: true
    rawBattery?: true
    batteryVolt?: true
    batteryPercent?: true
    rawTemp?: true
    tempCelsius?: true
    tempFahrenheit?: true
    readingQuality?: true
    tankLevelRaw?: true
    tankLevelNonCompensatedMm?: true
    tankLevelNonCompensatedIn?: true
    tankLevelCompensatedMm?: true
    tankLevelCompensatedInch?: true
    accelX?: true
    accelY?: true
    angle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MopekaDataMaxAggregateInputType = {
    id?: true
    mopekaSensorId?: true
    rawBattery?: true
    batteryVolt?: true
    batteryPercent?: true
    rawTemp?: true
    tempCelsius?: true
    tempFahrenheit?: true
    readingQuality?: true
    tankLevelRaw?: true
    tankLevelNonCompensatedMm?: true
    tankLevelNonCompensatedIn?: true
    tankLevelCompensatedMm?: true
    tankLevelCompensatedInch?: true
    accelX?: true
    accelY?: true
    angle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MopekaDataCountAggregateInputType = {
    id?: true
    mopekaSensorId?: true
    rawBattery?: true
    batteryVolt?: true
    batteryPercent?: true
    rawTemp?: true
    tempCelsius?: true
    tempFahrenheit?: true
    readingQuality?: true
    tankLevelRaw?: true
    tankLevelNonCompensatedMm?: true
    tankLevelNonCompensatedIn?: true
    tankLevelCompensatedMm?: true
    tankLevelCompensatedInch?: true
    accelX?: true
    accelY?: true
    angle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MopekaDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MopekaData to aggregate.
     */
    where?: MopekaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaData to fetch.
     */
    orderBy?: MopekaDataOrderByWithRelationInput | MopekaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MopekaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MopekaData
    **/
    _count?: true | MopekaDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MopekaDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MopekaDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MopekaDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MopekaDataMaxAggregateInputType
  }

  export type GetMopekaDataAggregateType<T extends MopekaDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMopekaData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMopekaData[P]>
      : GetScalarType<T[P], AggregateMopekaData[P]>
  }




  export type MopekaDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MopekaDataWhereInput
    orderBy?: MopekaDataOrderByWithAggregationInput | MopekaDataOrderByWithAggregationInput[]
    by: MopekaDataScalarFieldEnum[] | MopekaDataScalarFieldEnum
    having?: MopekaDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MopekaDataCountAggregateInputType | true
    _avg?: MopekaDataAvgAggregateInputType
    _sum?: MopekaDataSumAggregateInputType
    _min?: MopekaDataMinAggregateInputType
    _max?: MopekaDataMaxAggregateInputType
  }

  export type MopekaDataGroupByOutputType = {
    id: string
    mopekaSensorId: string
    rawBattery: number | null
    batteryVolt: number | null
    batteryPercent: number | null
    rawTemp: number | null
    tempCelsius: number | null
    tempFahrenheit: number | null
    readingQuality: number | null
    tankLevelRaw: number | null
    tankLevelNonCompensatedMm: number | null
    tankLevelNonCompensatedIn: number | null
    tankLevelCompensatedMm: number | null
    tankLevelCompensatedInch: number | null
    accelX: number | null
    accelY: number | null
    angle: number | null
    createdAt: Date
    updatedAt: Date
    _count: MopekaDataCountAggregateOutputType | null
    _avg: MopekaDataAvgAggregateOutputType | null
    _sum: MopekaDataSumAggregateOutputType | null
    _min: MopekaDataMinAggregateOutputType | null
    _max: MopekaDataMaxAggregateOutputType | null
  }

  type GetMopekaDataGroupByPayload<T extends MopekaDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MopekaDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MopekaDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MopekaDataGroupByOutputType[P]>
            : GetScalarType<T[P], MopekaDataGroupByOutputType[P]>
        }
      >
    >


  export type MopekaDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mopekaSensorId?: boolean
    rawBattery?: boolean
    batteryVolt?: boolean
    batteryPercent?: boolean
    rawTemp?: boolean
    tempCelsius?: boolean
    tempFahrenheit?: boolean
    readingQuality?: boolean
    tankLevelRaw?: boolean
    tankLevelNonCompensatedMm?: boolean
    tankLevelNonCompensatedIn?: boolean
    tankLevelCompensatedMm?: boolean
    tankLevelCompensatedInch?: boolean
    accelX?: boolean
    accelY?: boolean
    angle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mopekaSensor?: boolean | MopekaSensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mopekaData"]>

  export type MopekaDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mopekaSensorId?: boolean
    rawBattery?: boolean
    batteryVolt?: boolean
    batteryPercent?: boolean
    rawTemp?: boolean
    tempCelsius?: boolean
    tempFahrenheit?: boolean
    readingQuality?: boolean
    tankLevelRaw?: boolean
    tankLevelNonCompensatedMm?: boolean
    tankLevelNonCompensatedIn?: boolean
    tankLevelCompensatedMm?: boolean
    tankLevelCompensatedInch?: boolean
    accelX?: boolean
    accelY?: boolean
    angle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mopekaSensor?: boolean | MopekaSensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mopekaData"]>

  export type MopekaDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mopekaSensorId?: boolean
    rawBattery?: boolean
    batteryVolt?: boolean
    batteryPercent?: boolean
    rawTemp?: boolean
    tempCelsius?: boolean
    tempFahrenheit?: boolean
    readingQuality?: boolean
    tankLevelRaw?: boolean
    tankLevelNonCompensatedMm?: boolean
    tankLevelNonCompensatedIn?: boolean
    tankLevelCompensatedMm?: boolean
    tankLevelCompensatedInch?: boolean
    accelX?: boolean
    accelY?: boolean
    angle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mopekaSensor?: boolean | MopekaSensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mopekaData"]>

  export type MopekaDataSelectScalar = {
    id?: boolean
    mopekaSensorId?: boolean
    rawBattery?: boolean
    batteryVolt?: boolean
    batteryPercent?: boolean
    rawTemp?: boolean
    tempCelsius?: boolean
    tempFahrenheit?: boolean
    readingQuality?: boolean
    tankLevelRaw?: boolean
    tankLevelNonCompensatedMm?: boolean
    tankLevelNonCompensatedIn?: boolean
    tankLevelCompensatedMm?: boolean
    tankLevelCompensatedInch?: boolean
    accelX?: boolean
    accelY?: boolean
    angle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MopekaDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mopekaSensorId" | "rawBattery" | "batteryVolt" | "batteryPercent" | "rawTemp" | "tempCelsius" | "tempFahrenheit" | "readingQuality" | "tankLevelRaw" | "tankLevelNonCompensatedMm" | "tankLevelNonCompensatedIn" | "tankLevelCompensatedMm" | "tankLevelCompensatedInch" | "accelX" | "accelY" | "angle" | "createdAt" | "updatedAt", ExtArgs["result"]["mopekaData"]>
  export type MopekaDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mopekaSensor?: boolean | MopekaSensorDefaultArgs<ExtArgs>
  }
  export type MopekaDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mopekaSensor?: boolean | MopekaSensorDefaultArgs<ExtArgs>
  }
  export type MopekaDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mopekaSensor?: boolean | MopekaSensorDefaultArgs<ExtArgs>
  }

  export type $MopekaDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MopekaData"
    objects: {
      mopekaSensor: Prisma.$MopekaSensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mopekaSensorId: string
      rawBattery: number | null
      batteryVolt: number | null
      batteryPercent: number | null
      rawTemp: number | null
      tempCelsius: number | null
      tempFahrenheit: number | null
      readingQuality: number | null
      tankLevelRaw: number | null
      tankLevelNonCompensatedMm: number | null
      tankLevelNonCompensatedIn: number | null
      tankLevelCompensatedMm: number | null
      tankLevelCompensatedInch: number | null
      accelX: number | null
      accelY: number | null
      angle: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mopekaData"]>
    composites: {}
  }

  type MopekaDataGetPayload<S extends boolean | null | undefined | MopekaDataDefaultArgs> = $Result.GetResult<Prisma.$MopekaDataPayload, S>

  type MopekaDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MopekaDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MopekaDataCountAggregateInputType | true
    }

  export interface MopekaDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MopekaData'], meta: { name: 'MopekaData' } }
    /**
     * Find zero or one MopekaData that matches the filter.
     * @param {MopekaDataFindUniqueArgs} args - Arguments to find a MopekaData
     * @example
     * // Get one MopekaData
     * const mopekaData = await prisma.mopekaData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MopekaDataFindUniqueArgs>(args: SelectSubset<T, MopekaDataFindUniqueArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MopekaData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MopekaDataFindUniqueOrThrowArgs} args - Arguments to find a MopekaData
     * @example
     * // Get one MopekaData
     * const mopekaData = await prisma.mopekaData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MopekaDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MopekaDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MopekaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaDataFindFirstArgs} args - Arguments to find a MopekaData
     * @example
     * // Get one MopekaData
     * const mopekaData = await prisma.mopekaData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MopekaDataFindFirstArgs>(args?: SelectSubset<T, MopekaDataFindFirstArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MopekaData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaDataFindFirstOrThrowArgs} args - Arguments to find a MopekaData
     * @example
     * // Get one MopekaData
     * const mopekaData = await prisma.mopekaData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MopekaDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MopekaDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MopekaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MopekaData
     * const mopekaData = await prisma.mopekaData.findMany()
     * 
     * // Get first 10 MopekaData
     * const mopekaData = await prisma.mopekaData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mopekaDataWithIdOnly = await prisma.mopekaData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MopekaDataFindManyArgs>(args?: SelectSubset<T, MopekaDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MopekaData.
     * @param {MopekaDataCreateArgs} args - Arguments to create a MopekaData.
     * @example
     * // Create one MopekaData
     * const MopekaData = await prisma.mopekaData.create({
     *   data: {
     *     // ... data to create a MopekaData
     *   }
     * })
     * 
     */
    create<T extends MopekaDataCreateArgs>(args: SelectSubset<T, MopekaDataCreateArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MopekaData.
     * @param {MopekaDataCreateManyArgs} args - Arguments to create many MopekaData.
     * @example
     * // Create many MopekaData
     * const mopekaData = await prisma.mopekaData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MopekaDataCreateManyArgs>(args?: SelectSubset<T, MopekaDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MopekaData and returns the data saved in the database.
     * @param {MopekaDataCreateManyAndReturnArgs} args - Arguments to create many MopekaData.
     * @example
     * // Create many MopekaData
     * const mopekaData = await prisma.mopekaData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MopekaData and only return the `id`
     * const mopekaDataWithIdOnly = await prisma.mopekaData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MopekaDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MopekaDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MopekaData.
     * @param {MopekaDataDeleteArgs} args - Arguments to delete one MopekaData.
     * @example
     * // Delete one MopekaData
     * const MopekaData = await prisma.mopekaData.delete({
     *   where: {
     *     // ... filter to delete one MopekaData
     *   }
     * })
     * 
     */
    delete<T extends MopekaDataDeleteArgs>(args: SelectSubset<T, MopekaDataDeleteArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MopekaData.
     * @param {MopekaDataUpdateArgs} args - Arguments to update one MopekaData.
     * @example
     * // Update one MopekaData
     * const mopekaData = await prisma.mopekaData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MopekaDataUpdateArgs>(args: SelectSubset<T, MopekaDataUpdateArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MopekaData.
     * @param {MopekaDataDeleteManyArgs} args - Arguments to filter MopekaData to delete.
     * @example
     * // Delete a few MopekaData
     * const { count } = await prisma.mopekaData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MopekaDataDeleteManyArgs>(args?: SelectSubset<T, MopekaDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MopekaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MopekaData
     * const mopekaData = await prisma.mopekaData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MopekaDataUpdateManyArgs>(args: SelectSubset<T, MopekaDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MopekaData and returns the data updated in the database.
     * @param {MopekaDataUpdateManyAndReturnArgs} args - Arguments to update many MopekaData.
     * @example
     * // Update many MopekaData
     * const mopekaData = await prisma.mopekaData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MopekaData and only return the `id`
     * const mopekaDataWithIdOnly = await prisma.mopekaData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MopekaDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MopekaDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MopekaData.
     * @param {MopekaDataUpsertArgs} args - Arguments to update or create a MopekaData.
     * @example
     * // Update or create a MopekaData
     * const mopekaData = await prisma.mopekaData.upsert({
     *   create: {
     *     // ... data to create a MopekaData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MopekaData we want to update
     *   }
     * })
     */
    upsert<T extends MopekaDataUpsertArgs>(args: SelectSubset<T, MopekaDataUpsertArgs<ExtArgs>>): Prisma__MopekaDataClient<$Result.GetResult<Prisma.$MopekaDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MopekaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaDataCountArgs} args - Arguments to filter MopekaData to count.
     * @example
     * // Count the number of MopekaData
     * const count = await prisma.mopekaData.count({
     *   where: {
     *     // ... the filter for the MopekaData we want to count
     *   }
     * })
    **/
    count<T extends MopekaDataCountArgs>(
      args?: Subset<T, MopekaDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MopekaDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MopekaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MopekaDataAggregateArgs>(args: Subset<T, MopekaDataAggregateArgs>): Prisma.PrismaPromise<GetMopekaDataAggregateType<T>>

    /**
     * Group by MopekaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MopekaDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MopekaDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MopekaDataGroupByArgs['orderBy'] }
        : { orderBy?: MopekaDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MopekaDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMopekaDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MopekaData model
   */
  readonly fields: MopekaDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MopekaData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MopekaDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mopekaSensor<T extends MopekaSensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MopekaSensorDefaultArgs<ExtArgs>>): Prisma__MopekaSensorClient<$Result.GetResult<Prisma.$MopekaSensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MopekaData model
   */
  interface MopekaDataFieldRefs {
    readonly id: FieldRef<"MopekaData", 'String'>
    readonly mopekaSensorId: FieldRef<"MopekaData", 'String'>
    readonly rawBattery: FieldRef<"MopekaData", 'Float'>
    readonly batteryVolt: FieldRef<"MopekaData", 'Float'>
    readonly batteryPercent: FieldRef<"MopekaData", 'Float'>
    readonly rawTemp: FieldRef<"MopekaData", 'Float'>
    readonly tempCelsius: FieldRef<"MopekaData", 'Float'>
    readonly tempFahrenheit: FieldRef<"MopekaData", 'Float'>
    readonly readingQuality: FieldRef<"MopekaData", 'Float'>
    readonly tankLevelRaw: FieldRef<"MopekaData", 'Float'>
    readonly tankLevelNonCompensatedMm: FieldRef<"MopekaData", 'Float'>
    readonly tankLevelNonCompensatedIn: FieldRef<"MopekaData", 'Float'>
    readonly tankLevelCompensatedMm: FieldRef<"MopekaData", 'Float'>
    readonly tankLevelCompensatedInch: FieldRef<"MopekaData", 'Float'>
    readonly accelX: FieldRef<"MopekaData", 'Float'>
    readonly accelY: FieldRef<"MopekaData", 'Float'>
    readonly angle: FieldRef<"MopekaData", 'Float'>
    readonly createdAt: FieldRef<"MopekaData", 'DateTime'>
    readonly updatedAt: FieldRef<"MopekaData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MopekaData findUnique
   */
  export type MopekaDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * Filter, which MopekaData to fetch.
     */
    where: MopekaDataWhereUniqueInput
  }

  /**
   * MopekaData findUniqueOrThrow
   */
  export type MopekaDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * Filter, which MopekaData to fetch.
     */
    where: MopekaDataWhereUniqueInput
  }

  /**
   * MopekaData findFirst
   */
  export type MopekaDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * Filter, which MopekaData to fetch.
     */
    where?: MopekaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaData to fetch.
     */
    orderBy?: MopekaDataOrderByWithRelationInput | MopekaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MopekaData.
     */
    cursor?: MopekaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MopekaData.
     */
    distinct?: MopekaDataScalarFieldEnum | MopekaDataScalarFieldEnum[]
  }

  /**
   * MopekaData findFirstOrThrow
   */
  export type MopekaDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * Filter, which MopekaData to fetch.
     */
    where?: MopekaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaData to fetch.
     */
    orderBy?: MopekaDataOrderByWithRelationInput | MopekaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MopekaData.
     */
    cursor?: MopekaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MopekaData.
     */
    distinct?: MopekaDataScalarFieldEnum | MopekaDataScalarFieldEnum[]
  }

  /**
   * MopekaData findMany
   */
  export type MopekaDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * Filter, which MopekaData to fetch.
     */
    where?: MopekaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MopekaData to fetch.
     */
    orderBy?: MopekaDataOrderByWithRelationInput | MopekaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MopekaData.
     */
    cursor?: MopekaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MopekaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MopekaData.
     */
    skip?: number
    distinct?: MopekaDataScalarFieldEnum | MopekaDataScalarFieldEnum[]
  }

  /**
   * MopekaData create
   */
  export type MopekaDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MopekaData.
     */
    data: XOR<MopekaDataCreateInput, MopekaDataUncheckedCreateInput>
  }

  /**
   * MopekaData createMany
   */
  export type MopekaDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MopekaData.
     */
    data: MopekaDataCreateManyInput | MopekaDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MopekaData createManyAndReturn
   */
  export type MopekaDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * The data used to create many MopekaData.
     */
    data: MopekaDataCreateManyInput | MopekaDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MopekaData update
   */
  export type MopekaDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MopekaData.
     */
    data: XOR<MopekaDataUpdateInput, MopekaDataUncheckedUpdateInput>
    /**
     * Choose, which MopekaData to update.
     */
    where: MopekaDataWhereUniqueInput
  }

  /**
   * MopekaData updateMany
   */
  export type MopekaDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MopekaData.
     */
    data: XOR<MopekaDataUpdateManyMutationInput, MopekaDataUncheckedUpdateManyInput>
    /**
     * Filter which MopekaData to update
     */
    where?: MopekaDataWhereInput
    /**
     * Limit how many MopekaData to update.
     */
    limit?: number
  }

  /**
   * MopekaData updateManyAndReturn
   */
  export type MopekaDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * The data used to update MopekaData.
     */
    data: XOR<MopekaDataUpdateManyMutationInput, MopekaDataUncheckedUpdateManyInput>
    /**
     * Filter which MopekaData to update
     */
    where?: MopekaDataWhereInput
    /**
     * Limit how many MopekaData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MopekaData upsert
   */
  export type MopekaDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MopekaData to update in case it exists.
     */
    where: MopekaDataWhereUniqueInput
    /**
     * In case the MopekaData found by the `where` argument doesn't exist, create a new MopekaData with this data.
     */
    create: XOR<MopekaDataCreateInput, MopekaDataUncheckedCreateInput>
    /**
     * In case the MopekaData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MopekaDataUpdateInput, MopekaDataUncheckedUpdateInput>
  }

  /**
   * MopekaData delete
   */
  export type MopekaDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
    /**
     * Filter which MopekaData to delete.
     */
    where: MopekaDataWhereUniqueInput
  }

  /**
   * MopekaData deleteMany
   */
  export type MopekaDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MopekaData to delete
     */
    where?: MopekaDataWhereInput
    /**
     * Limit how many MopekaData to delete.
     */
    limit?: number
  }

  /**
   * MopekaData without action
   */
  export type MopekaDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MopekaData
     */
    select?: MopekaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MopekaData
     */
    omit?: MopekaDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MopekaDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MopekaSensorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sensorId: 'sensorId',
    mqttTopic: 'mqttTopic',
    mediumType: 'mediumType',
    tankSizeGallon: 'tankSizeGallon',
    tankSizeInch: 'tankSizeInch',
    threshold: 'threshold',
    heightOffset: 'heightOffset',
    trailerId: 'trailerId',
    calibrationPoints: 'calibrationPoints',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MopekaSensorScalarFieldEnum = (typeof MopekaSensorScalarFieldEnum)[keyof typeof MopekaSensorScalarFieldEnum]


  export const BMSScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deviceName: 'deviceName',
    mqttTopic: 'mqttTopic',
    threshold: 'threshold',
    trailerId: 'trailerId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BMSScalarFieldEnum = (typeof BMSScalarFieldEnum)[keyof typeof BMSScalarFieldEnum]


  export const RaspiScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deviceName: 'deviceName',
    mqttTopic: 'mqttTopic',
    helicopterId: 'helicopterId',
    trailerId: 'trailerId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RaspiScalarFieldEnum = (typeof RaspiScalarFieldEnum)[keyof typeof RaspiScalarFieldEnum]


  export const TiltSensorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deviceName: 'deviceName',
    mqttTopic: 'mqttTopic',
    helicopterId: 'helicopterId',
    trailerId: 'trailerId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TiltSensorScalarFieldEnum = (typeof TiltSensorScalarFieldEnum)[keyof typeof TiltSensorScalarFieldEnum]


  export const SerialNumberScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    serialNumber: 'serialNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SerialNumberScalarFieldEnum = (typeof SerialNumberScalarFieldEnum)[keyof typeof SerialNumberScalarFieldEnum]


  export const MqttConfigScalarFieldEnum: {
    id: 'id',
    basePath: 'basePath',
    host: 'host',
    port: 'port',
    protocol: 'protocol',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MqttConfigScalarFieldEnum = (typeof MqttConfigScalarFieldEnum)[keyof typeof MqttConfigScalarFieldEnum]


  export const RaspiDataScalarFieldEnum: {
    id: 'id',
    raspiId: 'raspiId',
    cht1: 'cht1',
    cht2: 'cht2',
    cht3: 'cht3',
    cht4: 'cht4',
    cht5: 'cht5',
    cht6: 'cht6',
    egt1: 'egt1',
    egt2: 'egt2',
    egt3: 'egt3',
    egt4: 'egt4',
    egt5: 'egt5',
    egt6: 'egt6',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RaspiDataScalarFieldEnum = (typeof RaspiDataScalarFieldEnum)[keyof typeof RaspiDataScalarFieldEnum]


  export const TiltDataScalarFieldEnum: {
    id: 'id',
    tiltSensorId: 'tiltSensorId',
    accX: 'accX',
    accY: 'accY',
    accZ: 'accZ',
    gyroX: 'gyroX',
    gyroY: 'gyroY',
    gyroZ: 'gyroZ',
    magX: 'magX',
    magY: 'magY',
    magZ: 'magZ',
    angleX: 'angleX',
    angleY: 'angleY',
    angleZ: 'angleZ',
    quat0: 'quat0',
    quat1: 'quat1',
    quat2: 'quat2',
    quat3: 'quat3',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TiltDataScalarFieldEnum = (typeof TiltDataScalarFieldEnum)[keyof typeof TiltDataScalarFieldEnum]


  export const BMSDataScalarFieldEnum: {
    id: 'id',
    bmsId: 'bmsId',
    stateOfCharge: 'stateOfCharge',
    totalVoltage: 'totalVoltage',
    current: 'current',
    power: 'power',
    remainingCapacity: 'remainingCapacity',
    nominalCapacity: 'nominalCapacity',
    chargingCycles: 'chargingCycles',
    deltaCellVoltage: 'deltaCellVoltage',
    softwareVersion: 'softwareVersion',
    errors: 'errors',
    balancingActive: 'balancingActive',
    cell1Voltage: 'cell1Voltage',
    cell2Voltage: 'cell2Voltage',
    cell3Voltage: 'cell3Voltage',
    cell4Voltage: 'cell4Voltage',
    temp1: 'temp1',
    temp2: 'temp2',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BMSDataScalarFieldEnum = (typeof BMSDataScalarFieldEnum)[keyof typeof BMSDataScalarFieldEnum]


  export const MopekaDataScalarFieldEnum: {
    id: 'id',
    mopekaSensorId: 'mopekaSensorId',
    rawBattery: 'rawBattery',
    batteryVolt: 'batteryVolt',
    batteryPercent: 'batteryPercent',
    rawTemp: 'rawTemp',
    tempCelsius: 'tempCelsius',
    tempFahrenheit: 'tempFahrenheit',
    readingQuality: 'readingQuality',
    tankLevelRaw: 'tankLevelRaw',
    tankLevelNonCompensatedMm: 'tankLevelNonCompensatedMm',
    tankLevelNonCompensatedIn: 'tankLevelNonCompensatedIn',
    tankLevelCompensatedMm: 'tankLevelCompensatedMm',
    tankLevelCompensatedInch: 'tankLevelCompensatedInch',
    accelX: 'accelX',
    accelY: 'accelY',
    angle: 'angle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MopekaDataScalarFieldEnum = (typeof MopekaDataScalarFieldEnum)[keyof typeof MopekaDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    mopekaSensors?: MopekaSensorListRelationFilter
    bmsSensors?: BMSListRelationFilter
    raspiSensors?: RaspiListRelationFilter
    tiltSensors?: TiltSensorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mopekaSensors?: MopekaSensorOrderByRelationAggregateInput
    bmsSensors?: BMSOrderByRelationAggregateInput
    raspiSensors?: RaspiOrderByRelationAggregateInput
    tiltSensors?: TiltSensorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    mopekaSensors?: MopekaSensorListRelationFilter
    bmsSensors?: BMSListRelationFilter
    raspiSensors?: RaspiListRelationFilter
    tiltSensors?: TiltSensorListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MopekaSensorWhereInput = {
    AND?: MopekaSensorWhereInput | MopekaSensorWhereInput[]
    OR?: MopekaSensorWhereInput[]
    NOT?: MopekaSensorWhereInput | MopekaSensorWhereInput[]
    id?: StringFilter<"MopekaSensor"> | string
    name?: StringFilter<"MopekaSensor"> | string
    sensorId?: StringFilter<"MopekaSensor"> | string
    mqttTopic?: StringFilter<"MopekaSensor"> | string
    mediumType?: StringFilter<"MopekaSensor"> | string
    tankSizeGallon?: FloatFilter<"MopekaSensor"> | number
    tankSizeInch?: FloatFilter<"MopekaSensor"> | number
    threshold?: FloatFilter<"MopekaSensor"> | number
    heightOffset?: FloatFilter<"MopekaSensor"> | number
    trailerId?: StringFilter<"MopekaSensor"> | string
    calibrationPoints?: FloatNullableListFilter<"MopekaSensor">
    createdBy?: StringFilter<"MopekaSensor"> | string
    createdAt?: DateTimeFilter<"MopekaSensor"> | Date | string
    updatedAt?: DateTimeFilter<"MopekaSensor"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    mopekaData?: MopekaDataListRelationFilter
  }

  export type MopekaSensorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sensorId?: SortOrder
    mqttTopic?: SortOrder
    mediumType?: SortOrder
    tankSizeGallon?: SortOrder
    tankSizeInch?: SortOrder
    threshold?: SortOrder
    heightOffset?: SortOrder
    trailerId?: SortOrder
    calibrationPoints?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    mopekaData?: MopekaDataOrderByRelationAggregateInput
  }

  export type MopekaSensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MopekaSensorWhereInput | MopekaSensorWhereInput[]
    OR?: MopekaSensorWhereInput[]
    NOT?: MopekaSensorWhereInput | MopekaSensorWhereInput[]
    name?: StringFilter<"MopekaSensor"> | string
    sensorId?: StringFilter<"MopekaSensor"> | string
    mqttTopic?: StringFilter<"MopekaSensor"> | string
    mediumType?: StringFilter<"MopekaSensor"> | string
    tankSizeGallon?: FloatFilter<"MopekaSensor"> | number
    tankSizeInch?: FloatFilter<"MopekaSensor"> | number
    threshold?: FloatFilter<"MopekaSensor"> | number
    heightOffset?: FloatFilter<"MopekaSensor"> | number
    trailerId?: StringFilter<"MopekaSensor"> | string
    calibrationPoints?: FloatNullableListFilter<"MopekaSensor">
    createdBy?: StringFilter<"MopekaSensor"> | string
    createdAt?: DateTimeFilter<"MopekaSensor"> | Date | string
    updatedAt?: DateTimeFilter<"MopekaSensor"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    mopekaData?: MopekaDataListRelationFilter
  }, "id">

  export type MopekaSensorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sensorId?: SortOrder
    mqttTopic?: SortOrder
    mediumType?: SortOrder
    tankSizeGallon?: SortOrder
    tankSizeInch?: SortOrder
    threshold?: SortOrder
    heightOffset?: SortOrder
    trailerId?: SortOrder
    calibrationPoints?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MopekaSensorCountOrderByAggregateInput
    _avg?: MopekaSensorAvgOrderByAggregateInput
    _max?: MopekaSensorMaxOrderByAggregateInput
    _min?: MopekaSensorMinOrderByAggregateInput
    _sum?: MopekaSensorSumOrderByAggregateInput
  }

  export type MopekaSensorScalarWhereWithAggregatesInput = {
    AND?: MopekaSensorScalarWhereWithAggregatesInput | MopekaSensorScalarWhereWithAggregatesInput[]
    OR?: MopekaSensorScalarWhereWithAggregatesInput[]
    NOT?: MopekaSensorScalarWhereWithAggregatesInput | MopekaSensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MopekaSensor"> | string
    name?: StringWithAggregatesFilter<"MopekaSensor"> | string
    sensorId?: StringWithAggregatesFilter<"MopekaSensor"> | string
    mqttTopic?: StringWithAggregatesFilter<"MopekaSensor"> | string
    mediumType?: StringWithAggregatesFilter<"MopekaSensor"> | string
    tankSizeGallon?: FloatWithAggregatesFilter<"MopekaSensor"> | number
    tankSizeInch?: FloatWithAggregatesFilter<"MopekaSensor"> | number
    threshold?: FloatWithAggregatesFilter<"MopekaSensor"> | number
    heightOffset?: FloatWithAggregatesFilter<"MopekaSensor"> | number
    trailerId?: StringWithAggregatesFilter<"MopekaSensor"> | string
    calibrationPoints?: FloatNullableListFilter<"MopekaSensor">
    createdBy?: StringWithAggregatesFilter<"MopekaSensor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MopekaSensor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MopekaSensor"> | Date | string
  }

  export type BMSWhereInput = {
    AND?: BMSWhereInput | BMSWhereInput[]
    OR?: BMSWhereInput[]
    NOT?: BMSWhereInput | BMSWhereInput[]
    id?: StringFilter<"BMS"> | string
    name?: StringFilter<"BMS"> | string
    deviceName?: StringFilter<"BMS"> | string
    mqttTopic?: StringFilter<"BMS"> | string
    threshold?: FloatFilter<"BMS"> | number
    trailerId?: StringFilter<"BMS"> | string
    createdBy?: StringFilter<"BMS"> | string
    createdAt?: DateTimeFilter<"BMS"> | Date | string
    updatedAt?: DateTimeFilter<"BMS"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    bmsData?: BMSDataListRelationFilter
  }

  export type BMSOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    threshold?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    bmsData?: BMSDataOrderByRelationAggregateInput
  }

  export type BMSWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BMSWhereInput | BMSWhereInput[]
    OR?: BMSWhereInput[]
    NOT?: BMSWhereInput | BMSWhereInput[]
    name?: StringFilter<"BMS"> | string
    deviceName?: StringFilter<"BMS"> | string
    mqttTopic?: StringFilter<"BMS"> | string
    threshold?: FloatFilter<"BMS"> | number
    trailerId?: StringFilter<"BMS"> | string
    createdBy?: StringFilter<"BMS"> | string
    createdAt?: DateTimeFilter<"BMS"> | Date | string
    updatedAt?: DateTimeFilter<"BMS"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    bmsData?: BMSDataListRelationFilter
  }, "id">

  export type BMSOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    threshold?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BMSCountOrderByAggregateInput
    _avg?: BMSAvgOrderByAggregateInput
    _max?: BMSMaxOrderByAggregateInput
    _min?: BMSMinOrderByAggregateInput
    _sum?: BMSSumOrderByAggregateInput
  }

  export type BMSScalarWhereWithAggregatesInput = {
    AND?: BMSScalarWhereWithAggregatesInput | BMSScalarWhereWithAggregatesInput[]
    OR?: BMSScalarWhereWithAggregatesInput[]
    NOT?: BMSScalarWhereWithAggregatesInput | BMSScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BMS"> | string
    name?: StringWithAggregatesFilter<"BMS"> | string
    deviceName?: StringWithAggregatesFilter<"BMS"> | string
    mqttTopic?: StringWithAggregatesFilter<"BMS"> | string
    threshold?: FloatWithAggregatesFilter<"BMS"> | number
    trailerId?: StringWithAggregatesFilter<"BMS"> | string
    createdBy?: StringWithAggregatesFilter<"BMS"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BMS"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BMS"> | Date | string
  }

  export type RaspiWhereInput = {
    AND?: RaspiWhereInput | RaspiWhereInput[]
    OR?: RaspiWhereInput[]
    NOT?: RaspiWhereInput | RaspiWhereInput[]
    id?: StringFilter<"Raspi"> | string
    name?: StringFilter<"Raspi"> | string
    deviceName?: StringFilter<"Raspi"> | string
    mqttTopic?: StringFilter<"Raspi"> | string
    helicopterId?: StringNullableFilter<"Raspi"> | string | null
    trailerId?: StringNullableFilter<"Raspi"> | string | null
    createdBy?: StringFilter<"Raspi"> | string
    createdAt?: DateTimeFilter<"Raspi"> | Date | string
    updatedAt?: DateTimeFilter<"Raspi"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    raspiData?: RaspiDataListRelationFilter
  }

  export type RaspiOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrderInput | SortOrder
    trailerId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    raspiData?: RaspiDataOrderByRelationAggregateInput
  }

  export type RaspiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaspiWhereInput | RaspiWhereInput[]
    OR?: RaspiWhereInput[]
    NOT?: RaspiWhereInput | RaspiWhereInput[]
    name?: StringFilter<"Raspi"> | string
    deviceName?: StringFilter<"Raspi"> | string
    mqttTopic?: StringFilter<"Raspi"> | string
    helicopterId?: StringNullableFilter<"Raspi"> | string | null
    trailerId?: StringNullableFilter<"Raspi"> | string | null
    createdBy?: StringFilter<"Raspi"> | string
    createdAt?: DateTimeFilter<"Raspi"> | Date | string
    updatedAt?: DateTimeFilter<"Raspi"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    raspiData?: RaspiDataListRelationFilter
  }, "id">

  export type RaspiOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrderInput | SortOrder
    trailerId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RaspiCountOrderByAggregateInput
    _max?: RaspiMaxOrderByAggregateInput
    _min?: RaspiMinOrderByAggregateInput
  }

  export type RaspiScalarWhereWithAggregatesInput = {
    AND?: RaspiScalarWhereWithAggregatesInput | RaspiScalarWhereWithAggregatesInput[]
    OR?: RaspiScalarWhereWithAggregatesInput[]
    NOT?: RaspiScalarWhereWithAggregatesInput | RaspiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Raspi"> | string
    name?: StringWithAggregatesFilter<"Raspi"> | string
    deviceName?: StringWithAggregatesFilter<"Raspi"> | string
    mqttTopic?: StringWithAggregatesFilter<"Raspi"> | string
    helicopterId?: StringNullableWithAggregatesFilter<"Raspi"> | string | null
    trailerId?: StringNullableWithAggregatesFilter<"Raspi"> | string | null
    createdBy?: StringWithAggregatesFilter<"Raspi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Raspi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Raspi"> | Date | string
  }

  export type TiltSensorWhereInput = {
    AND?: TiltSensorWhereInput | TiltSensorWhereInput[]
    OR?: TiltSensorWhereInput[]
    NOT?: TiltSensorWhereInput | TiltSensorWhereInput[]
    id?: StringFilter<"TiltSensor"> | string
    name?: StringFilter<"TiltSensor"> | string
    deviceName?: StringFilter<"TiltSensor"> | string
    mqttTopic?: StringFilter<"TiltSensor"> | string
    helicopterId?: StringNullableFilter<"TiltSensor"> | string | null
    trailerId?: StringNullableFilter<"TiltSensor"> | string | null
    createdBy?: StringFilter<"TiltSensor"> | string
    createdAt?: DateTimeFilter<"TiltSensor"> | Date | string
    updatedAt?: DateTimeFilter<"TiltSensor"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tiltData?: TiltDataListRelationFilter
  }

  export type TiltSensorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrderInput | SortOrder
    trailerId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    tiltData?: TiltDataOrderByRelationAggregateInput
  }

  export type TiltSensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TiltSensorWhereInput | TiltSensorWhereInput[]
    OR?: TiltSensorWhereInput[]
    NOT?: TiltSensorWhereInput | TiltSensorWhereInput[]
    name?: StringFilter<"TiltSensor"> | string
    deviceName?: StringFilter<"TiltSensor"> | string
    mqttTopic?: StringFilter<"TiltSensor"> | string
    helicopterId?: StringNullableFilter<"TiltSensor"> | string | null
    trailerId?: StringNullableFilter<"TiltSensor"> | string | null
    createdBy?: StringFilter<"TiltSensor"> | string
    createdAt?: DateTimeFilter<"TiltSensor"> | Date | string
    updatedAt?: DateTimeFilter<"TiltSensor"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tiltData?: TiltDataListRelationFilter
  }, "id">

  export type TiltSensorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrderInput | SortOrder
    trailerId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TiltSensorCountOrderByAggregateInput
    _max?: TiltSensorMaxOrderByAggregateInput
    _min?: TiltSensorMinOrderByAggregateInput
  }

  export type TiltSensorScalarWhereWithAggregatesInput = {
    AND?: TiltSensorScalarWhereWithAggregatesInput | TiltSensorScalarWhereWithAggregatesInput[]
    OR?: TiltSensorScalarWhereWithAggregatesInput[]
    NOT?: TiltSensorScalarWhereWithAggregatesInput | TiltSensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TiltSensor"> | string
    name?: StringWithAggregatesFilter<"TiltSensor"> | string
    deviceName?: StringWithAggregatesFilter<"TiltSensor"> | string
    mqttTopic?: StringWithAggregatesFilter<"TiltSensor"> | string
    helicopterId?: StringNullableWithAggregatesFilter<"TiltSensor"> | string | null
    trailerId?: StringNullableWithAggregatesFilter<"TiltSensor"> | string | null
    createdBy?: StringWithAggregatesFilter<"TiltSensor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TiltSensor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TiltSensor"> | Date | string
  }

  export type SerialNumberWhereInput = {
    AND?: SerialNumberWhereInput | SerialNumberWhereInput[]
    OR?: SerialNumberWhereInput[]
    NOT?: SerialNumberWhereInput | SerialNumberWhereInput[]
    id?: StringFilter<"SerialNumber"> | string
    type?: StringFilter<"SerialNumber"> | string
    name?: StringFilter<"SerialNumber"> | string
    serialNumber?: StringFilter<"SerialNumber"> | string
    createdAt?: DateTimeFilter<"SerialNumber"> | Date | string
    updatedAt?: DateTimeFilter<"SerialNumber"> | Date | string
  }

  export type SerialNumberOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SerialNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SerialNumberWhereInput | SerialNumberWhereInput[]
    OR?: SerialNumberWhereInput[]
    NOT?: SerialNumberWhereInput | SerialNumberWhereInput[]
    type?: StringFilter<"SerialNumber"> | string
    name?: StringFilter<"SerialNumber"> | string
    serialNumber?: StringFilter<"SerialNumber"> | string
    createdAt?: DateTimeFilter<"SerialNumber"> | Date | string
    updatedAt?: DateTimeFilter<"SerialNumber"> | Date | string
  }, "id">

  export type SerialNumberOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SerialNumberCountOrderByAggregateInput
    _max?: SerialNumberMaxOrderByAggregateInput
    _min?: SerialNumberMinOrderByAggregateInput
  }

  export type SerialNumberScalarWhereWithAggregatesInput = {
    AND?: SerialNumberScalarWhereWithAggregatesInput | SerialNumberScalarWhereWithAggregatesInput[]
    OR?: SerialNumberScalarWhereWithAggregatesInput[]
    NOT?: SerialNumberScalarWhereWithAggregatesInput | SerialNumberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SerialNumber"> | string
    type?: StringWithAggregatesFilter<"SerialNumber"> | string
    name?: StringWithAggregatesFilter<"SerialNumber"> | string
    serialNumber?: StringWithAggregatesFilter<"SerialNumber"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SerialNumber"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SerialNumber"> | Date | string
  }

  export type MqttConfigWhereInput = {
    AND?: MqttConfigWhereInput | MqttConfigWhereInput[]
    OR?: MqttConfigWhereInput[]
    NOT?: MqttConfigWhereInput | MqttConfigWhereInput[]
    id?: StringFilter<"MqttConfig"> | string
    basePath?: StringFilter<"MqttConfig"> | string
    host?: StringFilter<"MqttConfig"> | string
    port?: IntFilter<"MqttConfig"> | number
    protocol?: StringFilter<"MqttConfig"> | string
    username?: StringFilter<"MqttConfig"> | string
    password?: StringFilter<"MqttConfig"> | string
    createdAt?: DateTimeFilter<"MqttConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MqttConfig"> | Date | string
  }

  export type MqttConfigOrderByWithRelationInput = {
    id?: SortOrder
    basePath?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MqttConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MqttConfigWhereInput | MqttConfigWhereInput[]
    OR?: MqttConfigWhereInput[]
    NOT?: MqttConfigWhereInput | MqttConfigWhereInput[]
    basePath?: StringFilter<"MqttConfig"> | string
    host?: StringFilter<"MqttConfig"> | string
    port?: IntFilter<"MqttConfig"> | number
    protocol?: StringFilter<"MqttConfig"> | string
    username?: StringFilter<"MqttConfig"> | string
    password?: StringFilter<"MqttConfig"> | string
    createdAt?: DateTimeFilter<"MqttConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MqttConfig"> | Date | string
  }, "id">

  export type MqttConfigOrderByWithAggregationInput = {
    id?: SortOrder
    basePath?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MqttConfigCountOrderByAggregateInput
    _avg?: MqttConfigAvgOrderByAggregateInput
    _max?: MqttConfigMaxOrderByAggregateInput
    _min?: MqttConfigMinOrderByAggregateInput
    _sum?: MqttConfigSumOrderByAggregateInput
  }

  export type MqttConfigScalarWhereWithAggregatesInput = {
    AND?: MqttConfigScalarWhereWithAggregatesInput | MqttConfigScalarWhereWithAggregatesInput[]
    OR?: MqttConfigScalarWhereWithAggregatesInput[]
    NOT?: MqttConfigScalarWhereWithAggregatesInput | MqttConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MqttConfig"> | string
    basePath?: StringWithAggregatesFilter<"MqttConfig"> | string
    host?: StringWithAggregatesFilter<"MqttConfig"> | string
    port?: IntWithAggregatesFilter<"MqttConfig"> | number
    protocol?: StringWithAggregatesFilter<"MqttConfig"> | string
    username?: StringWithAggregatesFilter<"MqttConfig"> | string
    password?: StringWithAggregatesFilter<"MqttConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MqttConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MqttConfig"> | Date | string
  }

  export type RaspiDataWhereInput = {
    AND?: RaspiDataWhereInput | RaspiDataWhereInput[]
    OR?: RaspiDataWhereInput[]
    NOT?: RaspiDataWhereInput | RaspiDataWhereInput[]
    id?: StringFilter<"RaspiData"> | string
    raspiId?: StringFilter<"RaspiData"> | string
    cht1?: FloatNullableFilter<"RaspiData"> | number | null
    cht2?: FloatNullableFilter<"RaspiData"> | number | null
    cht3?: FloatNullableFilter<"RaspiData"> | number | null
    cht4?: FloatNullableFilter<"RaspiData"> | number | null
    cht5?: FloatNullableFilter<"RaspiData"> | number | null
    cht6?: FloatNullableFilter<"RaspiData"> | number | null
    egt1?: FloatNullableFilter<"RaspiData"> | number | null
    egt2?: FloatNullableFilter<"RaspiData"> | number | null
    egt3?: FloatNullableFilter<"RaspiData"> | number | null
    egt4?: FloatNullableFilter<"RaspiData"> | number | null
    egt5?: FloatNullableFilter<"RaspiData"> | number | null
    egt6?: FloatNullableFilter<"RaspiData"> | number | null
    createdAt?: DateTimeFilter<"RaspiData"> | Date | string
    updatedAt?: DateTimeFilter<"RaspiData"> | Date | string
    raspi?: XOR<RaspiScalarRelationFilter, RaspiWhereInput>
  }

  export type RaspiDataOrderByWithRelationInput = {
    id?: SortOrder
    raspiId?: SortOrder
    cht1?: SortOrderInput | SortOrder
    cht2?: SortOrderInput | SortOrder
    cht3?: SortOrderInput | SortOrder
    cht4?: SortOrderInput | SortOrder
    cht5?: SortOrderInput | SortOrder
    cht6?: SortOrderInput | SortOrder
    egt1?: SortOrderInput | SortOrder
    egt2?: SortOrderInput | SortOrder
    egt3?: SortOrderInput | SortOrder
    egt4?: SortOrderInput | SortOrder
    egt5?: SortOrderInput | SortOrder
    egt6?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    raspi?: RaspiOrderByWithRelationInput
  }

  export type RaspiDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaspiDataWhereInput | RaspiDataWhereInput[]
    OR?: RaspiDataWhereInput[]
    NOT?: RaspiDataWhereInput | RaspiDataWhereInput[]
    raspiId?: StringFilter<"RaspiData"> | string
    cht1?: FloatNullableFilter<"RaspiData"> | number | null
    cht2?: FloatNullableFilter<"RaspiData"> | number | null
    cht3?: FloatNullableFilter<"RaspiData"> | number | null
    cht4?: FloatNullableFilter<"RaspiData"> | number | null
    cht5?: FloatNullableFilter<"RaspiData"> | number | null
    cht6?: FloatNullableFilter<"RaspiData"> | number | null
    egt1?: FloatNullableFilter<"RaspiData"> | number | null
    egt2?: FloatNullableFilter<"RaspiData"> | number | null
    egt3?: FloatNullableFilter<"RaspiData"> | number | null
    egt4?: FloatNullableFilter<"RaspiData"> | number | null
    egt5?: FloatNullableFilter<"RaspiData"> | number | null
    egt6?: FloatNullableFilter<"RaspiData"> | number | null
    createdAt?: DateTimeFilter<"RaspiData"> | Date | string
    updatedAt?: DateTimeFilter<"RaspiData"> | Date | string
    raspi?: XOR<RaspiScalarRelationFilter, RaspiWhereInput>
  }, "id">

  export type RaspiDataOrderByWithAggregationInput = {
    id?: SortOrder
    raspiId?: SortOrder
    cht1?: SortOrderInput | SortOrder
    cht2?: SortOrderInput | SortOrder
    cht3?: SortOrderInput | SortOrder
    cht4?: SortOrderInput | SortOrder
    cht5?: SortOrderInput | SortOrder
    cht6?: SortOrderInput | SortOrder
    egt1?: SortOrderInput | SortOrder
    egt2?: SortOrderInput | SortOrder
    egt3?: SortOrderInput | SortOrder
    egt4?: SortOrderInput | SortOrder
    egt5?: SortOrderInput | SortOrder
    egt6?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RaspiDataCountOrderByAggregateInput
    _avg?: RaspiDataAvgOrderByAggregateInput
    _max?: RaspiDataMaxOrderByAggregateInput
    _min?: RaspiDataMinOrderByAggregateInput
    _sum?: RaspiDataSumOrderByAggregateInput
  }

  export type RaspiDataScalarWhereWithAggregatesInput = {
    AND?: RaspiDataScalarWhereWithAggregatesInput | RaspiDataScalarWhereWithAggregatesInput[]
    OR?: RaspiDataScalarWhereWithAggregatesInput[]
    NOT?: RaspiDataScalarWhereWithAggregatesInput | RaspiDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaspiData"> | string
    raspiId?: StringWithAggregatesFilter<"RaspiData"> | string
    cht1?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    cht2?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    cht3?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    cht4?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    cht5?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    cht6?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    egt1?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    egt2?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    egt3?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    egt4?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    egt5?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    egt6?: FloatNullableWithAggregatesFilter<"RaspiData"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RaspiData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RaspiData"> | Date | string
  }

  export type TiltDataWhereInput = {
    AND?: TiltDataWhereInput | TiltDataWhereInput[]
    OR?: TiltDataWhereInput[]
    NOT?: TiltDataWhereInput | TiltDataWhereInput[]
    id?: StringFilter<"TiltData"> | string
    tiltSensorId?: StringFilter<"TiltData"> | string
    accX?: FloatNullableFilter<"TiltData"> | number | null
    accY?: FloatNullableFilter<"TiltData"> | number | null
    accZ?: FloatNullableFilter<"TiltData"> | number | null
    gyroX?: FloatNullableFilter<"TiltData"> | number | null
    gyroY?: FloatNullableFilter<"TiltData"> | number | null
    gyroZ?: FloatNullableFilter<"TiltData"> | number | null
    magX?: FloatNullableFilter<"TiltData"> | number | null
    magY?: FloatNullableFilter<"TiltData"> | number | null
    magZ?: FloatNullableFilter<"TiltData"> | number | null
    angleX?: FloatNullableFilter<"TiltData"> | number | null
    angleY?: FloatNullableFilter<"TiltData"> | number | null
    angleZ?: FloatNullableFilter<"TiltData"> | number | null
    quat0?: FloatNullableFilter<"TiltData"> | number | null
    quat1?: FloatNullableFilter<"TiltData"> | number | null
    quat2?: FloatNullableFilter<"TiltData"> | number | null
    quat3?: FloatNullableFilter<"TiltData"> | number | null
    createdAt?: DateTimeFilter<"TiltData"> | Date | string
    updatedAt?: DateTimeFilter<"TiltData"> | Date | string
    tiltSensor?: XOR<TiltSensorScalarRelationFilter, TiltSensorWhereInput>
  }

  export type TiltDataOrderByWithRelationInput = {
    id?: SortOrder
    tiltSensorId?: SortOrder
    accX?: SortOrderInput | SortOrder
    accY?: SortOrderInput | SortOrder
    accZ?: SortOrderInput | SortOrder
    gyroX?: SortOrderInput | SortOrder
    gyroY?: SortOrderInput | SortOrder
    gyroZ?: SortOrderInput | SortOrder
    magX?: SortOrderInput | SortOrder
    magY?: SortOrderInput | SortOrder
    magZ?: SortOrderInput | SortOrder
    angleX?: SortOrderInput | SortOrder
    angleY?: SortOrderInput | SortOrder
    angleZ?: SortOrderInput | SortOrder
    quat0?: SortOrderInput | SortOrder
    quat1?: SortOrderInput | SortOrder
    quat2?: SortOrderInput | SortOrder
    quat3?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tiltSensor?: TiltSensorOrderByWithRelationInput
  }

  export type TiltDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TiltDataWhereInput | TiltDataWhereInput[]
    OR?: TiltDataWhereInput[]
    NOT?: TiltDataWhereInput | TiltDataWhereInput[]
    tiltSensorId?: StringFilter<"TiltData"> | string
    accX?: FloatNullableFilter<"TiltData"> | number | null
    accY?: FloatNullableFilter<"TiltData"> | number | null
    accZ?: FloatNullableFilter<"TiltData"> | number | null
    gyroX?: FloatNullableFilter<"TiltData"> | number | null
    gyroY?: FloatNullableFilter<"TiltData"> | number | null
    gyroZ?: FloatNullableFilter<"TiltData"> | number | null
    magX?: FloatNullableFilter<"TiltData"> | number | null
    magY?: FloatNullableFilter<"TiltData"> | number | null
    magZ?: FloatNullableFilter<"TiltData"> | number | null
    angleX?: FloatNullableFilter<"TiltData"> | number | null
    angleY?: FloatNullableFilter<"TiltData"> | number | null
    angleZ?: FloatNullableFilter<"TiltData"> | number | null
    quat0?: FloatNullableFilter<"TiltData"> | number | null
    quat1?: FloatNullableFilter<"TiltData"> | number | null
    quat2?: FloatNullableFilter<"TiltData"> | number | null
    quat3?: FloatNullableFilter<"TiltData"> | number | null
    createdAt?: DateTimeFilter<"TiltData"> | Date | string
    updatedAt?: DateTimeFilter<"TiltData"> | Date | string
    tiltSensor?: XOR<TiltSensorScalarRelationFilter, TiltSensorWhereInput>
  }, "id">

  export type TiltDataOrderByWithAggregationInput = {
    id?: SortOrder
    tiltSensorId?: SortOrder
    accX?: SortOrderInput | SortOrder
    accY?: SortOrderInput | SortOrder
    accZ?: SortOrderInput | SortOrder
    gyroX?: SortOrderInput | SortOrder
    gyroY?: SortOrderInput | SortOrder
    gyroZ?: SortOrderInput | SortOrder
    magX?: SortOrderInput | SortOrder
    magY?: SortOrderInput | SortOrder
    magZ?: SortOrderInput | SortOrder
    angleX?: SortOrderInput | SortOrder
    angleY?: SortOrderInput | SortOrder
    angleZ?: SortOrderInput | SortOrder
    quat0?: SortOrderInput | SortOrder
    quat1?: SortOrderInput | SortOrder
    quat2?: SortOrderInput | SortOrder
    quat3?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TiltDataCountOrderByAggregateInput
    _avg?: TiltDataAvgOrderByAggregateInput
    _max?: TiltDataMaxOrderByAggregateInput
    _min?: TiltDataMinOrderByAggregateInput
    _sum?: TiltDataSumOrderByAggregateInput
  }

  export type TiltDataScalarWhereWithAggregatesInput = {
    AND?: TiltDataScalarWhereWithAggregatesInput | TiltDataScalarWhereWithAggregatesInput[]
    OR?: TiltDataScalarWhereWithAggregatesInput[]
    NOT?: TiltDataScalarWhereWithAggregatesInput | TiltDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TiltData"> | string
    tiltSensorId?: StringWithAggregatesFilter<"TiltData"> | string
    accX?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    accY?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    accZ?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    gyroX?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    gyroY?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    gyroZ?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    magX?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    magY?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    magZ?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    angleX?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    angleY?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    angleZ?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    quat0?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    quat1?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    quat2?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    quat3?: FloatNullableWithAggregatesFilter<"TiltData"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TiltData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TiltData"> | Date | string
  }

  export type BMSDataWhereInput = {
    AND?: BMSDataWhereInput | BMSDataWhereInput[]
    OR?: BMSDataWhereInput[]
    NOT?: BMSDataWhereInput | BMSDataWhereInput[]
    id?: StringFilter<"BMSData"> | string
    bmsId?: StringFilter<"BMSData"> | string
    stateOfCharge?: FloatNullableFilter<"BMSData"> | number | null
    totalVoltage?: FloatNullableFilter<"BMSData"> | number | null
    current?: FloatNullableFilter<"BMSData"> | number | null
    power?: FloatNullableFilter<"BMSData"> | number | null
    remainingCapacity?: FloatNullableFilter<"BMSData"> | number | null
    nominalCapacity?: FloatNullableFilter<"BMSData"> | number | null
    chargingCycles?: IntNullableFilter<"BMSData"> | number | null
    deltaCellVoltage?: FloatNullableFilter<"BMSData"> | number | null
    softwareVersion?: StringNullableFilter<"BMSData"> | string | null
    errors?: StringNullableFilter<"BMSData"> | string | null
    balancingActive?: BoolNullableFilter<"BMSData"> | boolean | null
    cell1Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell2Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell3Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell4Voltage?: FloatNullableFilter<"BMSData"> | number | null
    temp1?: FloatNullableFilter<"BMSData"> | number | null
    temp2?: FloatNullableFilter<"BMSData"> | number | null
    createdAt?: DateTimeFilter<"BMSData"> | Date | string
    updatedAt?: DateTimeFilter<"BMSData"> | Date | string
    bms?: XOR<BMSScalarRelationFilter, BMSWhereInput>
  }

  export type BMSDataOrderByWithRelationInput = {
    id?: SortOrder
    bmsId?: SortOrder
    stateOfCharge?: SortOrderInput | SortOrder
    totalVoltage?: SortOrderInput | SortOrder
    current?: SortOrderInput | SortOrder
    power?: SortOrderInput | SortOrder
    remainingCapacity?: SortOrderInput | SortOrder
    nominalCapacity?: SortOrderInput | SortOrder
    chargingCycles?: SortOrderInput | SortOrder
    deltaCellVoltage?: SortOrderInput | SortOrder
    softwareVersion?: SortOrderInput | SortOrder
    errors?: SortOrderInput | SortOrder
    balancingActive?: SortOrderInput | SortOrder
    cell1Voltage?: SortOrderInput | SortOrder
    cell2Voltage?: SortOrderInput | SortOrder
    cell3Voltage?: SortOrderInput | SortOrder
    cell4Voltage?: SortOrderInput | SortOrder
    temp1?: SortOrderInput | SortOrder
    temp2?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bms?: BMSOrderByWithRelationInput
  }

  export type BMSDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BMSDataWhereInput | BMSDataWhereInput[]
    OR?: BMSDataWhereInput[]
    NOT?: BMSDataWhereInput | BMSDataWhereInput[]
    bmsId?: StringFilter<"BMSData"> | string
    stateOfCharge?: FloatNullableFilter<"BMSData"> | number | null
    totalVoltage?: FloatNullableFilter<"BMSData"> | number | null
    current?: FloatNullableFilter<"BMSData"> | number | null
    power?: FloatNullableFilter<"BMSData"> | number | null
    remainingCapacity?: FloatNullableFilter<"BMSData"> | number | null
    nominalCapacity?: FloatNullableFilter<"BMSData"> | number | null
    chargingCycles?: IntNullableFilter<"BMSData"> | number | null
    deltaCellVoltage?: FloatNullableFilter<"BMSData"> | number | null
    softwareVersion?: StringNullableFilter<"BMSData"> | string | null
    errors?: StringNullableFilter<"BMSData"> | string | null
    balancingActive?: BoolNullableFilter<"BMSData"> | boolean | null
    cell1Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell2Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell3Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell4Voltage?: FloatNullableFilter<"BMSData"> | number | null
    temp1?: FloatNullableFilter<"BMSData"> | number | null
    temp2?: FloatNullableFilter<"BMSData"> | number | null
    createdAt?: DateTimeFilter<"BMSData"> | Date | string
    updatedAt?: DateTimeFilter<"BMSData"> | Date | string
    bms?: XOR<BMSScalarRelationFilter, BMSWhereInput>
  }, "id">

  export type BMSDataOrderByWithAggregationInput = {
    id?: SortOrder
    bmsId?: SortOrder
    stateOfCharge?: SortOrderInput | SortOrder
    totalVoltage?: SortOrderInput | SortOrder
    current?: SortOrderInput | SortOrder
    power?: SortOrderInput | SortOrder
    remainingCapacity?: SortOrderInput | SortOrder
    nominalCapacity?: SortOrderInput | SortOrder
    chargingCycles?: SortOrderInput | SortOrder
    deltaCellVoltage?: SortOrderInput | SortOrder
    softwareVersion?: SortOrderInput | SortOrder
    errors?: SortOrderInput | SortOrder
    balancingActive?: SortOrderInput | SortOrder
    cell1Voltage?: SortOrderInput | SortOrder
    cell2Voltage?: SortOrderInput | SortOrder
    cell3Voltage?: SortOrderInput | SortOrder
    cell4Voltage?: SortOrderInput | SortOrder
    temp1?: SortOrderInput | SortOrder
    temp2?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BMSDataCountOrderByAggregateInput
    _avg?: BMSDataAvgOrderByAggregateInput
    _max?: BMSDataMaxOrderByAggregateInput
    _min?: BMSDataMinOrderByAggregateInput
    _sum?: BMSDataSumOrderByAggregateInput
  }

  export type BMSDataScalarWhereWithAggregatesInput = {
    AND?: BMSDataScalarWhereWithAggregatesInput | BMSDataScalarWhereWithAggregatesInput[]
    OR?: BMSDataScalarWhereWithAggregatesInput[]
    NOT?: BMSDataScalarWhereWithAggregatesInput | BMSDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BMSData"> | string
    bmsId?: StringWithAggregatesFilter<"BMSData"> | string
    stateOfCharge?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    totalVoltage?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    current?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    power?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    remainingCapacity?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    nominalCapacity?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    chargingCycles?: IntNullableWithAggregatesFilter<"BMSData"> | number | null
    deltaCellVoltage?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    softwareVersion?: StringNullableWithAggregatesFilter<"BMSData"> | string | null
    errors?: StringNullableWithAggregatesFilter<"BMSData"> | string | null
    balancingActive?: BoolNullableWithAggregatesFilter<"BMSData"> | boolean | null
    cell1Voltage?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    cell2Voltage?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    cell3Voltage?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    cell4Voltage?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    temp1?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    temp2?: FloatNullableWithAggregatesFilter<"BMSData"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"BMSData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BMSData"> | Date | string
  }

  export type MopekaDataWhereInput = {
    AND?: MopekaDataWhereInput | MopekaDataWhereInput[]
    OR?: MopekaDataWhereInput[]
    NOT?: MopekaDataWhereInput | MopekaDataWhereInput[]
    id?: StringFilter<"MopekaData"> | string
    mopekaSensorId?: StringFilter<"MopekaData"> | string
    rawBattery?: FloatNullableFilter<"MopekaData"> | number | null
    batteryVolt?: FloatNullableFilter<"MopekaData"> | number | null
    batteryPercent?: FloatNullableFilter<"MopekaData"> | number | null
    rawTemp?: FloatNullableFilter<"MopekaData"> | number | null
    tempCelsius?: FloatNullableFilter<"MopekaData"> | number | null
    tempFahrenheit?: FloatNullableFilter<"MopekaData"> | number | null
    readingQuality?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelRaw?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedMm?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedIn?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelCompensatedMm?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelCompensatedInch?: FloatNullableFilter<"MopekaData"> | number | null
    accelX?: FloatNullableFilter<"MopekaData"> | number | null
    accelY?: FloatNullableFilter<"MopekaData"> | number | null
    angle?: FloatNullableFilter<"MopekaData"> | number | null
    createdAt?: DateTimeFilter<"MopekaData"> | Date | string
    updatedAt?: DateTimeFilter<"MopekaData"> | Date | string
    mopekaSensor?: XOR<MopekaSensorScalarRelationFilter, MopekaSensorWhereInput>
  }

  export type MopekaDataOrderByWithRelationInput = {
    id?: SortOrder
    mopekaSensorId?: SortOrder
    rawBattery?: SortOrderInput | SortOrder
    batteryVolt?: SortOrderInput | SortOrder
    batteryPercent?: SortOrderInput | SortOrder
    rawTemp?: SortOrderInput | SortOrder
    tempCelsius?: SortOrderInput | SortOrder
    tempFahrenheit?: SortOrderInput | SortOrder
    readingQuality?: SortOrderInput | SortOrder
    tankLevelRaw?: SortOrderInput | SortOrder
    tankLevelNonCompensatedMm?: SortOrderInput | SortOrder
    tankLevelNonCompensatedIn?: SortOrderInput | SortOrder
    tankLevelCompensatedMm?: SortOrderInput | SortOrder
    tankLevelCompensatedInch?: SortOrderInput | SortOrder
    accelX?: SortOrderInput | SortOrder
    accelY?: SortOrderInput | SortOrder
    angle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mopekaSensor?: MopekaSensorOrderByWithRelationInput
  }

  export type MopekaDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MopekaDataWhereInput | MopekaDataWhereInput[]
    OR?: MopekaDataWhereInput[]
    NOT?: MopekaDataWhereInput | MopekaDataWhereInput[]
    mopekaSensorId?: StringFilter<"MopekaData"> | string
    rawBattery?: FloatNullableFilter<"MopekaData"> | number | null
    batteryVolt?: FloatNullableFilter<"MopekaData"> | number | null
    batteryPercent?: FloatNullableFilter<"MopekaData"> | number | null
    rawTemp?: FloatNullableFilter<"MopekaData"> | number | null
    tempCelsius?: FloatNullableFilter<"MopekaData"> | number | null
    tempFahrenheit?: FloatNullableFilter<"MopekaData"> | number | null
    readingQuality?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelRaw?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedMm?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedIn?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelCompensatedMm?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelCompensatedInch?: FloatNullableFilter<"MopekaData"> | number | null
    accelX?: FloatNullableFilter<"MopekaData"> | number | null
    accelY?: FloatNullableFilter<"MopekaData"> | number | null
    angle?: FloatNullableFilter<"MopekaData"> | number | null
    createdAt?: DateTimeFilter<"MopekaData"> | Date | string
    updatedAt?: DateTimeFilter<"MopekaData"> | Date | string
    mopekaSensor?: XOR<MopekaSensorScalarRelationFilter, MopekaSensorWhereInput>
  }, "id">

  export type MopekaDataOrderByWithAggregationInput = {
    id?: SortOrder
    mopekaSensorId?: SortOrder
    rawBattery?: SortOrderInput | SortOrder
    batteryVolt?: SortOrderInput | SortOrder
    batteryPercent?: SortOrderInput | SortOrder
    rawTemp?: SortOrderInput | SortOrder
    tempCelsius?: SortOrderInput | SortOrder
    tempFahrenheit?: SortOrderInput | SortOrder
    readingQuality?: SortOrderInput | SortOrder
    tankLevelRaw?: SortOrderInput | SortOrder
    tankLevelNonCompensatedMm?: SortOrderInput | SortOrder
    tankLevelNonCompensatedIn?: SortOrderInput | SortOrder
    tankLevelCompensatedMm?: SortOrderInput | SortOrder
    tankLevelCompensatedInch?: SortOrderInput | SortOrder
    accelX?: SortOrderInput | SortOrder
    accelY?: SortOrderInput | SortOrder
    angle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MopekaDataCountOrderByAggregateInput
    _avg?: MopekaDataAvgOrderByAggregateInput
    _max?: MopekaDataMaxOrderByAggregateInput
    _min?: MopekaDataMinOrderByAggregateInput
    _sum?: MopekaDataSumOrderByAggregateInput
  }

  export type MopekaDataScalarWhereWithAggregatesInput = {
    AND?: MopekaDataScalarWhereWithAggregatesInput | MopekaDataScalarWhereWithAggregatesInput[]
    OR?: MopekaDataScalarWhereWithAggregatesInput[]
    NOT?: MopekaDataScalarWhereWithAggregatesInput | MopekaDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MopekaData"> | string
    mopekaSensorId?: StringWithAggregatesFilter<"MopekaData"> | string
    rawBattery?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    batteryVolt?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    batteryPercent?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    rawTemp?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    tempCelsius?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    tempFahrenheit?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    readingQuality?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    tankLevelRaw?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedMm?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedIn?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    tankLevelCompensatedMm?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    tankLevelCompensatedInch?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    accelX?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    accelY?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    angle?: FloatNullableWithAggregatesFilter<"MopekaData"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MopekaData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MopekaData"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorCreateNestedManyWithoutCreatorInput
    bmsSensors?: BMSCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorUncheckedCreateNestedManyWithoutCreatorInput
    bmsSensors?: BMSUncheckedCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiUncheckedCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUpdateManyWithoutCreatorNestedInput
    bmsSensors?: BMSUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUncheckedUpdateManyWithoutCreatorNestedInput
    bmsSensors?: BMSUncheckedUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUncheckedUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaSensorCreateInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMopekaSensorsInput
    mopekaData?: MopekaDataCreateNestedManyWithoutMopekaSensorInput
  }

  export type MopekaSensorUncheckedCreateInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaData?: MopekaDataUncheckedCreateNestedManyWithoutMopekaSensorInput
  }

  export type MopekaSensorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMopekaSensorsNestedInput
    mopekaData?: MopekaDataUpdateManyWithoutMopekaSensorNestedInput
  }

  export type MopekaSensorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaData?: MopekaDataUncheckedUpdateManyWithoutMopekaSensorNestedInput
  }

  export type MopekaSensorCreateManyInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaSensorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaSensorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSCreateInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutBmsSensorsInput
    bmsData?: BMSDataCreateNestedManyWithoutBmsInput
  }

  export type BMSUncheckedCreateInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bmsData?: BMSDataUncheckedCreateNestedManyWithoutBmsInput
  }

  export type BMSUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutBmsSensorsNestedInput
    bmsData?: BMSDataUpdateManyWithoutBmsNestedInput
  }

  export type BMSUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmsData?: BMSDataUncheckedUpdateManyWithoutBmsNestedInput
  }

  export type BMSCreateManyInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiCreateInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutRaspiSensorsInput
    raspiData?: RaspiDataCreateNestedManyWithoutRaspiInput
  }

  export type RaspiUncheckedCreateInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    raspiData?: RaspiDataUncheckedCreateNestedManyWithoutRaspiInput
  }

  export type RaspiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutRaspiSensorsNestedInput
    raspiData?: RaspiDataUpdateManyWithoutRaspiNestedInput
  }

  export type RaspiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raspiData?: RaspiDataUncheckedUpdateManyWithoutRaspiNestedInput
  }

  export type RaspiCreateManyInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltSensorCreateInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutTiltSensorsInput
    tiltData?: TiltDataCreateNestedManyWithoutTiltSensorInput
  }

  export type TiltSensorUncheckedCreateInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiltData?: TiltDataUncheckedCreateNestedManyWithoutTiltSensorInput
  }

  export type TiltSensorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutTiltSensorsNestedInput
    tiltData?: TiltDataUpdateManyWithoutTiltSensorNestedInput
  }

  export type TiltSensorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiltData?: TiltDataUncheckedUpdateManyWithoutTiltSensorNestedInput
  }

  export type TiltSensorCreateManyInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltSensorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltSensorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SerialNumberCreateInput = {
    id?: string
    type: string
    name: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SerialNumberUncheckedCreateInput = {
    id?: string
    type: string
    name: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SerialNumberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SerialNumberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SerialNumberCreateManyInput = {
    id?: string
    type: string
    name: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SerialNumberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SerialNumberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MqttConfigCreateInput = {
    id?: string
    basePath: string
    host: string
    port: number
    protocol: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MqttConfigUncheckedCreateInput = {
    id?: string
    basePath: string
    host: string
    port: number
    protocol: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MqttConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MqttConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MqttConfigCreateManyInput = {
    id?: string
    basePath: string
    host: string
    port: number
    protocol: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MqttConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MqttConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiDataCreateInput = {
    id?: string
    cht1?: number | null
    cht2?: number | null
    cht3?: number | null
    cht4?: number | null
    cht5?: number | null
    cht6?: number | null
    egt1?: number | null
    egt2?: number | null
    egt3?: number | null
    egt4?: number | null
    egt5?: number | null
    egt6?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    raspi: RaspiCreateNestedOneWithoutRaspiDataInput
  }

  export type RaspiDataUncheckedCreateInput = {
    id?: string
    raspiId: string
    cht1?: number | null
    cht2?: number | null
    cht3?: number | null
    cht4?: number | null
    cht5?: number | null
    cht6?: number | null
    egt1?: number | null
    egt2?: number | null
    egt3?: number | null
    egt4?: number | null
    egt5?: number | null
    egt6?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cht1?: NullableFloatFieldUpdateOperationsInput | number | null
    cht2?: NullableFloatFieldUpdateOperationsInput | number | null
    cht3?: NullableFloatFieldUpdateOperationsInput | number | null
    cht4?: NullableFloatFieldUpdateOperationsInput | number | null
    cht5?: NullableFloatFieldUpdateOperationsInput | number | null
    cht6?: NullableFloatFieldUpdateOperationsInput | number | null
    egt1?: NullableFloatFieldUpdateOperationsInput | number | null
    egt2?: NullableFloatFieldUpdateOperationsInput | number | null
    egt3?: NullableFloatFieldUpdateOperationsInput | number | null
    egt4?: NullableFloatFieldUpdateOperationsInput | number | null
    egt5?: NullableFloatFieldUpdateOperationsInput | number | null
    egt6?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raspi?: RaspiUpdateOneRequiredWithoutRaspiDataNestedInput
  }

  export type RaspiDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raspiId?: StringFieldUpdateOperationsInput | string
    cht1?: NullableFloatFieldUpdateOperationsInput | number | null
    cht2?: NullableFloatFieldUpdateOperationsInput | number | null
    cht3?: NullableFloatFieldUpdateOperationsInput | number | null
    cht4?: NullableFloatFieldUpdateOperationsInput | number | null
    cht5?: NullableFloatFieldUpdateOperationsInput | number | null
    cht6?: NullableFloatFieldUpdateOperationsInput | number | null
    egt1?: NullableFloatFieldUpdateOperationsInput | number | null
    egt2?: NullableFloatFieldUpdateOperationsInput | number | null
    egt3?: NullableFloatFieldUpdateOperationsInput | number | null
    egt4?: NullableFloatFieldUpdateOperationsInput | number | null
    egt5?: NullableFloatFieldUpdateOperationsInput | number | null
    egt6?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiDataCreateManyInput = {
    id?: string
    raspiId: string
    cht1?: number | null
    cht2?: number | null
    cht3?: number | null
    cht4?: number | null
    cht5?: number | null
    cht6?: number | null
    egt1?: number | null
    egt2?: number | null
    egt3?: number | null
    egt4?: number | null
    egt5?: number | null
    egt6?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cht1?: NullableFloatFieldUpdateOperationsInput | number | null
    cht2?: NullableFloatFieldUpdateOperationsInput | number | null
    cht3?: NullableFloatFieldUpdateOperationsInput | number | null
    cht4?: NullableFloatFieldUpdateOperationsInput | number | null
    cht5?: NullableFloatFieldUpdateOperationsInput | number | null
    cht6?: NullableFloatFieldUpdateOperationsInput | number | null
    egt1?: NullableFloatFieldUpdateOperationsInput | number | null
    egt2?: NullableFloatFieldUpdateOperationsInput | number | null
    egt3?: NullableFloatFieldUpdateOperationsInput | number | null
    egt4?: NullableFloatFieldUpdateOperationsInput | number | null
    egt5?: NullableFloatFieldUpdateOperationsInput | number | null
    egt6?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raspiId?: StringFieldUpdateOperationsInput | string
    cht1?: NullableFloatFieldUpdateOperationsInput | number | null
    cht2?: NullableFloatFieldUpdateOperationsInput | number | null
    cht3?: NullableFloatFieldUpdateOperationsInput | number | null
    cht4?: NullableFloatFieldUpdateOperationsInput | number | null
    cht5?: NullableFloatFieldUpdateOperationsInput | number | null
    cht6?: NullableFloatFieldUpdateOperationsInput | number | null
    egt1?: NullableFloatFieldUpdateOperationsInput | number | null
    egt2?: NullableFloatFieldUpdateOperationsInput | number | null
    egt3?: NullableFloatFieldUpdateOperationsInput | number | null
    egt4?: NullableFloatFieldUpdateOperationsInput | number | null
    egt5?: NullableFloatFieldUpdateOperationsInput | number | null
    egt6?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltDataCreateInput = {
    id?: string
    accX?: number | null
    accY?: number | null
    accZ?: number | null
    gyroX?: number | null
    gyroY?: number | null
    gyroZ?: number | null
    magX?: number | null
    magY?: number | null
    magZ?: number | null
    angleX?: number | null
    angleY?: number | null
    angleZ?: number | null
    quat0?: number | null
    quat1?: number | null
    quat2?: number | null
    quat3?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tiltSensor: TiltSensorCreateNestedOneWithoutTiltDataInput
  }

  export type TiltDataUncheckedCreateInput = {
    id?: string
    tiltSensorId: string
    accX?: number | null
    accY?: number | null
    accZ?: number | null
    gyroX?: number | null
    gyroY?: number | null
    gyroZ?: number | null
    magX?: number | null
    magY?: number | null
    magZ?: number | null
    angleX?: number | null
    angleY?: number | null
    angleZ?: number | null
    quat0?: number | null
    quat1?: number | null
    quat2?: number | null
    quat3?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accX?: NullableFloatFieldUpdateOperationsInput | number | null
    accY?: NullableFloatFieldUpdateOperationsInput | number | null
    accZ?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroX?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroY?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroZ?: NullableFloatFieldUpdateOperationsInput | number | null
    magX?: NullableFloatFieldUpdateOperationsInput | number | null
    magY?: NullableFloatFieldUpdateOperationsInput | number | null
    magZ?: NullableFloatFieldUpdateOperationsInput | number | null
    angleX?: NullableFloatFieldUpdateOperationsInput | number | null
    angleY?: NullableFloatFieldUpdateOperationsInput | number | null
    angleZ?: NullableFloatFieldUpdateOperationsInput | number | null
    quat0?: NullableFloatFieldUpdateOperationsInput | number | null
    quat1?: NullableFloatFieldUpdateOperationsInput | number | null
    quat2?: NullableFloatFieldUpdateOperationsInput | number | null
    quat3?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiltSensor?: TiltSensorUpdateOneRequiredWithoutTiltDataNestedInput
  }

  export type TiltDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tiltSensorId?: StringFieldUpdateOperationsInput | string
    accX?: NullableFloatFieldUpdateOperationsInput | number | null
    accY?: NullableFloatFieldUpdateOperationsInput | number | null
    accZ?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroX?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroY?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroZ?: NullableFloatFieldUpdateOperationsInput | number | null
    magX?: NullableFloatFieldUpdateOperationsInput | number | null
    magY?: NullableFloatFieldUpdateOperationsInput | number | null
    magZ?: NullableFloatFieldUpdateOperationsInput | number | null
    angleX?: NullableFloatFieldUpdateOperationsInput | number | null
    angleY?: NullableFloatFieldUpdateOperationsInput | number | null
    angleZ?: NullableFloatFieldUpdateOperationsInput | number | null
    quat0?: NullableFloatFieldUpdateOperationsInput | number | null
    quat1?: NullableFloatFieldUpdateOperationsInput | number | null
    quat2?: NullableFloatFieldUpdateOperationsInput | number | null
    quat3?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltDataCreateManyInput = {
    id?: string
    tiltSensorId: string
    accX?: number | null
    accY?: number | null
    accZ?: number | null
    gyroX?: number | null
    gyroY?: number | null
    gyroZ?: number | null
    magX?: number | null
    magY?: number | null
    magZ?: number | null
    angleX?: number | null
    angleY?: number | null
    angleZ?: number | null
    quat0?: number | null
    quat1?: number | null
    quat2?: number | null
    quat3?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accX?: NullableFloatFieldUpdateOperationsInput | number | null
    accY?: NullableFloatFieldUpdateOperationsInput | number | null
    accZ?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroX?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroY?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroZ?: NullableFloatFieldUpdateOperationsInput | number | null
    magX?: NullableFloatFieldUpdateOperationsInput | number | null
    magY?: NullableFloatFieldUpdateOperationsInput | number | null
    magZ?: NullableFloatFieldUpdateOperationsInput | number | null
    angleX?: NullableFloatFieldUpdateOperationsInput | number | null
    angleY?: NullableFloatFieldUpdateOperationsInput | number | null
    angleZ?: NullableFloatFieldUpdateOperationsInput | number | null
    quat0?: NullableFloatFieldUpdateOperationsInput | number | null
    quat1?: NullableFloatFieldUpdateOperationsInput | number | null
    quat2?: NullableFloatFieldUpdateOperationsInput | number | null
    quat3?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tiltSensorId?: StringFieldUpdateOperationsInput | string
    accX?: NullableFloatFieldUpdateOperationsInput | number | null
    accY?: NullableFloatFieldUpdateOperationsInput | number | null
    accZ?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroX?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroY?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroZ?: NullableFloatFieldUpdateOperationsInput | number | null
    magX?: NullableFloatFieldUpdateOperationsInput | number | null
    magY?: NullableFloatFieldUpdateOperationsInput | number | null
    magZ?: NullableFloatFieldUpdateOperationsInput | number | null
    angleX?: NullableFloatFieldUpdateOperationsInput | number | null
    angleY?: NullableFloatFieldUpdateOperationsInput | number | null
    angleZ?: NullableFloatFieldUpdateOperationsInput | number | null
    quat0?: NullableFloatFieldUpdateOperationsInput | number | null
    quat1?: NullableFloatFieldUpdateOperationsInput | number | null
    quat2?: NullableFloatFieldUpdateOperationsInput | number | null
    quat3?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSDataCreateInput = {
    id?: string
    stateOfCharge?: number | null
    totalVoltage?: number | null
    current?: number | null
    power?: number | null
    remainingCapacity?: number | null
    nominalCapacity?: number | null
    chargingCycles?: number | null
    deltaCellVoltage?: number | null
    softwareVersion?: string | null
    errors?: string | null
    balancingActive?: boolean | null
    cell1Voltage?: number | null
    cell2Voltage?: number | null
    cell3Voltage?: number | null
    cell4Voltage?: number | null
    temp1?: number | null
    temp2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bms: BMSCreateNestedOneWithoutBmsDataInput
  }

  export type BMSDataUncheckedCreateInput = {
    id?: string
    bmsId: string
    stateOfCharge?: number | null
    totalVoltage?: number | null
    current?: number | null
    power?: number | null
    remainingCapacity?: number | null
    nominalCapacity?: number | null
    chargingCycles?: number | null
    deltaCellVoltage?: number | null
    softwareVersion?: string | null
    errors?: string | null
    balancingActive?: boolean | null
    cell1Voltage?: number | null
    cell2Voltage?: number | null
    cell3Voltage?: number | null
    cell4Voltage?: number | null
    temp1?: number | null
    temp2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateOfCharge?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    power?: NullableFloatFieldUpdateOperationsInput | number | null
    remainingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    nominalCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    chargingCycles?: NullableIntFieldUpdateOperationsInput | number | null
    deltaCellVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    softwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    balancingActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cell1Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell2Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell3Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell4Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    temp1?: NullableFloatFieldUpdateOperationsInput | number | null
    temp2?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bms?: BMSUpdateOneRequiredWithoutBmsDataNestedInput
  }

  export type BMSDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bmsId?: StringFieldUpdateOperationsInput | string
    stateOfCharge?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    power?: NullableFloatFieldUpdateOperationsInput | number | null
    remainingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    nominalCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    chargingCycles?: NullableIntFieldUpdateOperationsInput | number | null
    deltaCellVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    softwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    balancingActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cell1Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell2Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell3Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell4Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    temp1?: NullableFloatFieldUpdateOperationsInput | number | null
    temp2?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSDataCreateManyInput = {
    id?: string
    bmsId: string
    stateOfCharge?: number | null
    totalVoltage?: number | null
    current?: number | null
    power?: number | null
    remainingCapacity?: number | null
    nominalCapacity?: number | null
    chargingCycles?: number | null
    deltaCellVoltage?: number | null
    softwareVersion?: string | null
    errors?: string | null
    balancingActive?: boolean | null
    cell1Voltage?: number | null
    cell2Voltage?: number | null
    cell3Voltage?: number | null
    cell4Voltage?: number | null
    temp1?: number | null
    temp2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateOfCharge?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    power?: NullableFloatFieldUpdateOperationsInput | number | null
    remainingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    nominalCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    chargingCycles?: NullableIntFieldUpdateOperationsInput | number | null
    deltaCellVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    softwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    balancingActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cell1Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell2Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell3Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell4Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    temp1?: NullableFloatFieldUpdateOperationsInput | number | null
    temp2?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bmsId?: StringFieldUpdateOperationsInput | string
    stateOfCharge?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    power?: NullableFloatFieldUpdateOperationsInput | number | null
    remainingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    nominalCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    chargingCycles?: NullableIntFieldUpdateOperationsInput | number | null
    deltaCellVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    softwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    balancingActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cell1Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell2Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell3Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell4Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    temp1?: NullableFloatFieldUpdateOperationsInput | number | null
    temp2?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaDataCreateInput = {
    id?: string
    rawBattery?: number | null
    batteryVolt?: number | null
    batteryPercent?: number | null
    rawTemp?: number | null
    tempCelsius?: number | null
    tempFahrenheit?: number | null
    readingQuality?: number | null
    tankLevelRaw?: number | null
    tankLevelNonCompensatedMm?: number | null
    tankLevelNonCompensatedIn?: number | null
    tankLevelCompensatedMm?: number | null
    tankLevelCompensatedInch?: number | null
    accelX?: number | null
    accelY?: number | null
    angle?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensor: MopekaSensorCreateNestedOneWithoutMopekaDataInput
  }

  export type MopekaDataUncheckedCreateInput = {
    id?: string
    mopekaSensorId: string
    rawBattery?: number | null
    batteryVolt?: number | null
    batteryPercent?: number | null
    rawTemp?: number | null
    tempCelsius?: number | null
    tempFahrenheit?: number | null
    readingQuality?: number | null
    tankLevelRaw?: number | null
    tankLevelNonCompensatedMm?: number | null
    tankLevelNonCompensatedIn?: number | null
    tankLevelCompensatedMm?: number | null
    tankLevelCompensatedInch?: number | null
    accelX?: number | null
    accelY?: number | null
    angle?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawBattery?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryVolt?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    rawTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    tempCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    tempFahrenheit?: NullableFloatFieldUpdateOperationsInput | number | null
    readingQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelRaw?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedIn?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedInch?: NullableFloatFieldUpdateOperationsInput | number | null
    accelX?: NullableFloatFieldUpdateOperationsInput | number | null
    accelY?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensor?: MopekaSensorUpdateOneRequiredWithoutMopekaDataNestedInput
  }

  export type MopekaDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mopekaSensorId?: StringFieldUpdateOperationsInput | string
    rawBattery?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryVolt?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    rawTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    tempCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    tempFahrenheit?: NullableFloatFieldUpdateOperationsInput | number | null
    readingQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelRaw?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedIn?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedInch?: NullableFloatFieldUpdateOperationsInput | number | null
    accelX?: NullableFloatFieldUpdateOperationsInput | number | null
    accelY?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaDataCreateManyInput = {
    id?: string
    mopekaSensorId: string
    rawBattery?: number | null
    batteryVolt?: number | null
    batteryPercent?: number | null
    rawTemp?: number | null
    tempCelsius?: number | null
    tempFahrenheit?: number | null
    readingQuality?: number | null
    tankLevelRaw?: number | null
    tankLevelNonCompensatedMm?: number | null
    tankLevelNonCompensatedIn?: number | null
    tankLevelCompensatedMm?: number | null
    tankLevelCompensatedInch?: number | null
    accelX?: number | null
    accelY?: number | null
    angle?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawBattery?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryVolt?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    rawTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    tempCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    tempFahrenheit?: NullableFloatFieldUpdateOperationsInput | number | null
    readingQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelRaw?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedIn?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedInch?: NullableFloatFieldUpdateOperationsInput | number | null
    accelX?: NullableFloatFieldUpdateOperationsInput | number | null
    accelY?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mopekaSensorId?: StringFieldUpdateOperationsInput | string
    rawBattery?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryVolt?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    rawTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    tempCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    tempFahrenheit?: NullableFloatFieldUpdateOperationsInput | number | null
    readingQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelRaw?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedIn?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedInch?: NullableFloatFieldUpdateOperationsInput | number | null
    accelX?: NullableFloatFieldUpdateOperationsInput | number | null
    accelY?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MopekaSensorListRelationFilter = {
    every?: MopekaSensorWhereInput
    some?: MopekaSensorWhereInput
    none?: MopekaSensorWhereInput
  }

  export type BMSListRelationFilter = {
    every?: BMSWhereInput
    some?: BMSWhereInput
    none?: BMSWhereInput
  }

  export type RaspiListRelationFilter = {
    every?: RaspiWhereInput
    some?: RaspiWhereInput
    none?: RaspiWhereInput
  }

  export type TiltSensorListRelationFilter = {
    every?: TiltSensorWhereInput
    some?: TiltSensorWhereInput
    none?: TiltSensorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MopekaSensorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BMSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaspiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TiltSensorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MopekaDataListRelationFilter = {
    every?: MopekaDataWhereInput
    some?: MopekaDataWhereInput
    none?: MopekaDataWhereInput
  }

  export type MopekaDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MopekaSensorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sensorId?: SortOrder
    mqttTopic?: SortOrder
    mediumType?: SortOrder
    tankSizeGallon?: SortOrder
    tankSizeInch?: SortOrder
    threshold?: SortOrder
    heightOffset?: SortOrder
    trailerId?: SortOrder
    calibrationPoints?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MopekaSensorAvgOrderByAggregateInput = {
    tankSizeGallon?: SortOrder
    tankSizeInch?: SortOrder
    threshold?: SortOrder
    heightOffset?: SortOrder
    calibrationPoints?: SortOrder
  }

  export type MopekaSensorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sensorId?: SortOrder
    mqttTopic?: SortOrder
    mediumType?: SortOrder
    tankSizeGallon?: SortOrder
    tankSizeInch?: SortOrder
    threshold?: SortOrder
    heightOffset?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MopekaSensorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sensorId?: SortOrder
    mqttTopic?: SortOrder
    mediumType?: SortOrder
    tankSizeGallon?: SortOrder
    tankSizeInch?: SortOrder
    threshold?: SortOrder
    heightOffset?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MopekaSensorSumOrderByAggregateInput = {
    tankSizeGallon?: SortOrder
    tankSizeInch?: SortOrder
    threshold?: SortOrder
    heightOffset?: SortOrder
    calibrationPoints?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BMSDataListRelationFilter = {
    every?: BMSDataWhereInput
    some?: BMSDataWhereInput
    none?: BMSDataWhereInput
  }

  export type BMSDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BMSCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    threshold?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BMSAvgOrderByAggregateInput = {
    threshold?: SortOrder
  }

  export type BMSMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    threshold?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BMSMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    threshold?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BMSSumOrderByAggregateInput = {
    threshold?: SortOrder
  }

  export type RaspiDataListRelationFilter = {
    every?: RaspiDataWhereInput
    some?: RaspiDataWhereInput
    none?: RaspiDataWhereInput
  }

  export type RaspiDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaspiCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaspiMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaspiMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiltDataListRelationFilter = {
    every?: TiltDataWhereInput
    some?: TiltDataWhereInput
    none?: TiltDataWhereInput
  }

  export type TiltDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TiltSensorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiltSensorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiltSensorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceName?: SortOrder
    mqttTopic?: SortOrder
    helicopterId?: SortOrder
    trailerId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SerialNumberCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SerialNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SerialNumberMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MqttConfigCountOrderByAggregateInput = {
    id?: SortOrder
    basePath?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MqttConfigAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type MqttConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    basePath?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MqttConfigMinOrderByAggregateInput = {
    id?: SortOrder
    basePath?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MqttConfigSumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RaspiScalarRelationFilter = {
    is?: RaspiWhereInput
    isNot?: RaspiWhereInput
  }

  export type RaspiDataCountOrderByAggregateInput = {
    id?: SortOrder
    raspiId?: SortOrder
    cht1?: SortOrder
    cht2?: SortOrder
    cht3?: SortOrder
    cht4?: SortOrder
    cht5?: SortOrder
    cht6?: SortOrder
    egt1?: SortOrder
    egt2?: SortOrder
    egt3?: SortOrder
    egt4?: SortOrder
    egt5?: SortOrder
    egt6?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaspiDataAvgOrderByAggregateInput = {
    cht1?: SortOrder
    cht2?: SortOrder
    cht3?: SortOrder
    cht4?: SortOrder
    cht5?: SortOrder
    cht6?: SortOrder
    egt1?: SortOrder
    egt2?: SortOrder
    egt3?: SortOrder
    egt4?: SortOrder
    egt5?: SortOrder
    egt6?: SortOrder
  }

  export type RaspiDataMaxOrderByAggregateInput = {
    id?: SortOrder
    raspiId?: SortOrder
    cht1?: SortOrder
    cht2?: SortOrder
    cht3?: SortOrder
    cht4?: SortOrder
    cht5?: SortOrder
    cht6?: SortOrder
    egt1?: SortOrder
    egt2?: SortOrder
    egt3?: SortOrder
    egt4?: SortOrder
    egt5?: SortOrder
    egt6?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaspiDataMinOrderByAggregateInput = {
    id?: SortOrder
    raspiId?: SortOrder
    cht1?: SortOrder
    cht2?: SortOrder
    cht3?: SortOrder
    cht4?: SortOrder
    cht5?: SortOrder
    cht6?: SortOrder
    egt1?: SortOrder
    egt2?: SortOrder
    egt3?: SortOrder
    egt4?: SortOrder
    egt5?: SortOrder
    egt6?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaspiDataSumOrderByAggregateInput = {
    cht1?: SortOrder
    cht2?: SortOrder
    cht3?: SortOrder
    cht4?: SortOrder
    cht5?: SortOrder
    cht6?: SortOrder
    egt1?: SortOrder
    egt2?: SortOrder
    egt3?: SortOrder
    egt4?: SortOrder
    egt5?: SortOrder
    egt6?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TiltSensorScalarRelationFilter = {
    is?: TiltSensorWhereInput
    isNot?: TiltSensorWhereInput
  }

  export type TiltDataCountOrderByAggregateInput = {
    id?: SortOrder
    tiltSensorId?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    magX?: SortOrder
    magY?: SortOrder
    magZ?: SortOrder
    angleX?: SortOrder
    angleY?: SortOrder
    angleZ?: SortOrder
    quat0?: SortOrder
    quat1?: SortOrder
    quat2?: SortOrder
    quat3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiltDataAvgOrderByAggregateInput = {
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    magX?: SortOrder
    magY?: SortOrder
    magZ?: SortOrder
    angleX?: SortOrder
    angleY?: SortOrder
    angleZ?: SortOrder
    quat0?: SortOrder
    quat1?: SortOrder
    quat2?: SortOrder
    quat3?: SortOrder
  }

  export type TiltDataMaxOrderByAggregateInput = {
    id?: SortOrder
    tiltSensorId?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    magX?: SortOrder
    magY?: SortOrder
    magZ?: SortOrder
    angleX?: SortOrder
    angleY?: SortOrder
    angleZ?: SortOrder
    quat0?: SortOrder
    quat1?: SortOrder
    quat2?: SortOrder
    quat3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiltDataMinOrderByAggregateInput = {
    id?: SortOrder
    tiltSensorId?: SortOrder
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    magX?: SortOrder
    magY?: SortOrder
    magZ?: SortOrder
    angleX?: SortOrder
    angleY?: SortOrder
    angleZ?: SortOrder
    quat0?: SortOrder
    quat1?: SortOrder
    quat2?: SortOrder
    quat3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiltDataSumOrderByAggregateInput = {
    accX?: SortOrder
    accY?: SortOrder
    accZ?: SortOrder
    gyroX?: SortOrder
    gyroY?: SortOrder
    gyroZ?: SortOrder
    magX?: SortOrder
    magY?: SortOrder
    magZ?: SortOrder
    angleX?: SortOrder
    angleY?: SortOrder
    angleZ?: SortOrder
    quat0?: SortOrder
    quat1?: SortOrder
    quat2?: SortOrder
    quat3?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BMSScalarRelationFilter = {
    is?: BMSWhereInput
    isNot?: BMSWhereInput
  }

  export type BMSDataCountOrderByAggregateInput = {
    id?: SortOrder
    bmsId?: SortOrder
    stateOfCharge?: SortOrder
    totalVoltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    remainingCapacity?: SortOrder
    nominalCapacity?: SortOrder
    chargingCycles?: SortOrder
    deltaCellVoltage?: SortOrder
    softwareVersion?: SortOrder
    errors?: SortOrder
    balancingActive?: SortOrder
    cell1Voltage?: SortOrder
    cell2Voltage?: SortOrder
    cell3Voltage?: SortOrder
    cell4Voltage?: SortOrder
    temp1?: SortOrder
    temp2?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BMSDataAvgOrderByAggregateInput = {
    stateOfCharge?: SortOrder
    totalVoltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    remainingCapacity?: SortOrder
    nominalCapacity?: SortOrder
    chargingCycles?: SortOrder
    deltaCellVoltage?: SortOrder
    cell1Voltage?: SortOrder
    cell2Voltage?: SortOrder
    cell3Voltage?: SortOrder
    cell4Voltage?: SortOrder
    temp1?: SortOrder
    temp2?: SortOrder
  }

  export type BMSDataMaxOrderByAggregateInput = {
    id?: SortOrder
    bmsId?: SortOrder
    stateOfCharge?: SortOrder
    totalVoltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    remainingCapacity?: SortOrder
    nominalCapacity?: SortOrder
    chargingCycles?: SortOrder
    deltaCellVoltage?: SortOrder
    softwareVersion?: SortOrder
    errors?: SortOrder
    balancingActive?: SortOrder
    cell1Voltage?: SortOrder
    cell2Voltage?: SortOrder
    cell3Voltage?: SortOrder
    cell4Voltage?: SortOrder
    temp1?: SortOrder
    temp2?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BMSDataMinOrderByAggregateInput = {
    id?: SortOrder
    bmsId?: SortOrder
    stateOfCharge?: SortOrder
    totalVoltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    remainingCapacity?: SortOrder
    nominalCapacity?: SortOrder
    chargingCycles?: SortOrder
    deltaCellVoltage?: SortOrder
    softwareVersion?: SortOrder
    errors?: SortOrder
    balancingActive?: SortOrder
    cell1Voltage?: SortOrder
    cell2Voltage?: SortOrder
    cell3Voltage?: SortOrder
    cell4Voltage?: SortOrder
    temp1?: SortOrder
    temp2?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BMSDataSumOrderByAggregateInput = {
    stateOfCharge?: SortOrder
    totalVoltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    remainingCapacity?: SortOrder
    nominalCapacity?: SortOrder
    chargingCycles?: SortOrder
    deltaCellVoltage?: SortOrder
    cell1Voltage?: SortOrder
    cell2Voltage?: SortOrder
    cell3Voltage?: SortOrder
    cell4Voltage?: SortOrder
    temp1?: SortOrder
    temp2?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MopekaSensorScalarRelationFilter = {
    is?: MopekaSensorWhereInput
    isNot?: MopekaSensorWhereInput
  }

  export type MopekaDataCountOrderByAggregateInput = {
    id?: SortOrder
    mopekaSensorId?: SortOrder
    rawBattery?: SortOrder
    batteryVolt?: SortOrder
    batteryPercent?: SortOrder
    rawTemp?: SortOrder
    tempCelsius?: SortOrder
    tempFahrenheit?: SortOrder
    readingQuality?: SortOrder
    tankLevelRaw?: SortOrder
    tankLevelNonCompensatedMm?: SortOrder
    tankLevelNonCompensatedIn?: SortOrder
    tankLevelCompensatedMm?: SortOrder
    tankLevelCompensatedInch?: SortOrder
    accelX?: SortOrder
    accelY?: SortOrder
    angle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MopekaDataAvgOrderByAggregateInput = {
    rawBattery?: SortOrder
    batteryVolt?: SortOrder
    batteryPercent?: SortOrder
    rawTemp?: SortOrder
    tempCelsius?: SortOrder
    tempFahrenheit?: SortOrder
    readingQuality?: SortOrder
    tankLevelRaw?: SortOrder
    tankLevelNonCompensatedMm?: SortOrder
    tankLevelNonCompensatedIn?: SortOrder
    tankLevelCompensatedMm?: SortOrder
    tankLevelCompensatedInch?: SortOrder
    accelX?: SortOrder
    accelY?: SortOrder
    angle?: SortOrder
  }

  export type MopekaDataMaxOrderByAggregateInput = {
    id?: SortOrder
    mopekaSensorId?: SortOrder
    rawBattery?: SortOrder
    batteryVolt?: SortOrder
    batteryPercent?: SortOrder
    rawTemp?: SortOrder
    tempCelsius?: SortOrder
    tempFahrenheit?: SortOrder
    readingQuality?: SortOrder
    tankLevelRaw?: SortOrder
    tankLevelNonCompensatedMm?: SortOrder
    tankLevelNonCompensatedIn?: SortOrder
    tankLevelCompensatedMm?: SortOrder
    tankLevelCompensatedInch?: SortOrder
    accelX?: SortOrder
    accelY?: SortOrder
    angle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MopekaDataMinOrderByAggregateInput = {
    id?: SortOrder
    mopekaSensorId?: SortOrder
    rawBattery?: SortOrder
    batteryVolt?: SortOrder
    batteryPercent?: SortOrder
    rawTemp?: SortOrder
    tempCelsius?: SortOrder
    tempFahrenheit?: SortOrder
    readingQuality?: SortOrder
    tankLevelRaw?: SortOrder
    tankLevelNonCompensatedMm?: SortOrder
    tankLevelNonCompensatedIn?: SortOrder
    tankLevelCompensatedMm?: SortOrder
    tankLevelCompensatedInch?: SortOrder
    accelX?: SortOrder
    accelY?: SortOrder
    angle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MopekaDataSumOrderByAggregateInput = {
    rawBattery?: SortOrder
    batteryVolt?: SortOrder
    batteryPercent?: SortOrder
    rawTemp?: SortOrder
    tempCelsius?: SortOrder
    tempFahrenheit?: SortOrder
    readingQuality?: SortOrder
    tankLevelRaw?: SortOrder
    tankLevelNonCompensatedMm?: SortOrder
    tankLevelNonCompensatedIn?: SortOrder
    tankLevelCompensatedMm?: SortOrder
    tankLevelCompensatedInch?: SortOrder
    accelX?: SortOrder
    accelY?: SortOrder
    angle?: SortOrder
  }

  export type MopekaSensorCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MopekaSensorCreateWithoutCreatorInput, MopekaSensorUncheckedCreateWithoutCreatorInput> | MopekaSensorCreateWithoutCreatorInput[] | MopekaSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MopekaSensorCreateOrConnectWithoutCreatorInput | MopekaSensorCreateOrConnectWithoutCreatorInput[]
    createMany?: MopekaSensorCreateManyCreatorInputEnvelope
    connect?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
  }

  export type BMSCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BMSCreateWithoutCreatorInput, BMSUncheckedCreateWithoutCreatorInput> | BMSCreateWithoutCreatorInput[] | BMSUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BMSCreateOrConnectWithoutCreatorInput | BMSCreateOrConnectWithoutCreatorInput[]
    createMany?: BMSCreateManyCreatorInputEnvelope
    connect?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
  }

  export type RaspiCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RaspiCreateWithoutCreatorInput, RaspiUncheckedCreateWithoutCreatorInput> | RaspiCreateWithoutCreatorInput[] | RaspiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaspiCreateOrConnectWithoutCreatorInput | RaspiCreateOrConnectWithoutCreatorInput[]
    createMany?: RaspiCreateManyCreatorInputEnvelope
    connect?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
  }

  export type TiltSensorCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TiltSensorCreateWithoutCreatorInput, TiltSensorUncheckedCreateWithoutCreatorInput> | TiltSensorCreateWithoutCreatorInput[] | TiltSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TiltSensorCreateOrConnectWithoutCreatorInput | TiltSensorCreateOrConnectWithoutCreatorInput[]
    createMany?: TiltSensorCreateManyCreatorInputEnvelope
    connect?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
  }

  export type MopekaSensorUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MopekaSensorCreateWithoutCreatorInput, MopekaSensorUncheckedCreateWithoutCreatorInput> | MopekaSensorCreateWithoutCreatorInput[] | MopekaSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MopekaSensorCreateOrConnectWithoutCreatorInput | MopekaSensorCreateOrConnectWithoutCreatorInput[]
    createMany?: MopekaSensorCreateManyCreatorInputEnvelope
    connect?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
  }

  export type BMSUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BMSCreateWithoutCreatorInput, BMSUncheckedCreateWithoutCreatorInput> | BMSCreateWithoutCreatorInput[] | BMSUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BMSCreateOrConnectWithoutCreatorInput | BMSCreateOrConnectWithoutCreatorInput[]
    createMany?: BMSCreateManyCreatorInputEnvelope
    connect?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
  }

  export type RaspiUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RaspiCreateWithoutCreatorInput, RaspiUncheckedCreateWithoutCreatorInput> | RaspiCreateWithoutCreatorInput[] | RaspiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaspiCreateOrConnectWithoutCreatorInput | RaspiCreateOrConnectWithoutCreatorInput[]
    createMany?: RaspiCreateManyCreatorInputEnvelope
    connect?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
  }

  export type TiltSensorUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TiltSensorCreateWithoutCreatorInput, TiltSensorUncheckedCreateWithoutCreatorInput> | TiltSensorCreateWithoutCreatorInput[] | TiltSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TiltSensorCreateOrConnectWithoutCreatorInput | TiltSensorCreateOrConnectWithoutCreatorInput[]
    createMany?: TiltSensorCreateManyCreatorInputEnvelope
    connect?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MopekaSensorUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MopekaSensorCreateWithoutCreatorInput, MopekaSensorUncheckedCreateWithoutCreatorInput> | MopekaSensorCreateWithoutCreatorInput[] | MopekaSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MopekaSensorCreateOrConnectWithoutCreatorInput | MopekaSensorCreateOrConnectWithoutCreatorInput[]
    upsert?: MopekaSensorUpsertWithWhereUniqueWithoutCreatorInput | MopekaSensorUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MopekaSensorCreateManyCreatorInputEnvelope
    set?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    disconnect?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    delete?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    connect?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    update?: MopekaSensorUpdateWithWhereUniqueWithoutCreatorInput | MopekaSensorUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MopekaSensorUpdateManyWithWhereWithoutCreatorInput | MopekaSensorUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MopekaSensorScalarWhereInput | MopekaSensorScalarWhereInput[]
  }

  export type BMSUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BMSCreateWithoutCreatorInput, BMSUncheckedCreateWithoutCreatorInput> | BMSCreateWithoutCreatorInput[] | BMSUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BMSCreateOrConnectWithoutCreatorInput | BMSCreateOrConnectWithoutCreatorInput[]
    upsert?: BMSUpsertWithWhereUniqueWithoutCreatorInput | BMSUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BMSCreateManyCreatorInputEnvelope
    set?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    disconnect?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    delete?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    connect?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    update?: BMSUpdateWithWhereUniqueWithoutCreatorInput | BMSUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BMSUpdateManyWithWhereWithoutCreatorInput | BMSUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BMSScalarWhereInput | BMSScalarWhereInput[]
  }

  export type RaspiUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RaspiCreateWithoutCreatorInput, RaspiUncheckedCreateWithoutCreatorInput> | RaspiCreateWithoutCreatorInput[] | RaspiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaspiCreateOrConnectWithoutCreatorInput | RaspiCreateOrConnectWithoutCreatorInput[]
    upsert?: RaspiUpsertWithWhereUniqueWithoutCreatorInput | RaspiUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RaspiCreateManyCreatorInputEnvelope
    set?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    disconnect?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    delete?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    connect?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    update?: RaspiUpdateWithWhereUniqueWithoutCreatorInput | RaspiUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RaspiUpdateManyWithWhereWithoutCreatorInput | RaspiUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RaspiScalarWhereInput | RaspiScalarWhereInput[]
  }

  export type TiltSensorUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TiltSensorCreateWithoutCreatorInput, TiltSensorUncheckedCreateWithoutCreatorInput> | TiltSensorCreateWithoutCreatorInput[] | TiltSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TiltSensorCreateOrConnectWithoutCreatorInput | TiltSensorCreateOrConnectWithoutCreatorInput[]
    upsert?: TiltSensorUpsertWithWhereUniqueWithoutCreatorInput | TiltSensorUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TiltSensorCreateManyCreatorInputEnvelope
    set?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    disconnect?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    delete?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    connect?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    update?: TiltSensorUpdateWithWhereUniqueWithoutCreatorInput | TiltSensorUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TiltSensorUpdateManyWithWhereWithoutCreatorInput | TiltSensorUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TiltSensorScalarWhereInput | TiltSensorScalarWhereInput[]
  }

  export type MopekaSensorUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MopekaSensorCreateWithoutCreatorInput, MopekaSensorUncheckedCreateWithoutCreatorInput> | MopekaSensorCreateWithoutCreatorInput[] | MopekaSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MopekaSensorCreateOrConnectWithoutCreatorInput | MopekaSensorCreateOrConnectWithoutCreatorInput[]
    upsert?: MopekaSensorUpsertWithWhereUniqueWithoutCreatorInput | MopekaSensorUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MopekaSensorCreateManyCreatorInputEnvelope
    set?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    disconnect?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    delete?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    connect?: MopekaSensorWhereUniqueInput | MopekaSensorWhereUniqueInput[]
    update?: MopekaSensorUpdateWithWhereUniqueWithoutCreatorInput | MopekaSensorUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MopekaSensorUpdateManyWithWhereWithoutCreatorInput | MopekaSensorUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MopekaSensorScalarWhereInput | MopekaSensorScalarWhereInput[]
  }

  export type BMSUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BMSCreateWithoutCreatorInput, BMSUncheckedCreateWithoutCreatorInput> | BMSCreateWithoutCreatorInput[] | BMSUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BMSCreateOrConnectWithoutCreatorInput | BMSCreateOrConnectWithoutCreatorInput[]
    upsert?: BMSUpsertWithWhereUniqueWithoutCreatorInput | BMSUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BMSCreateManyCreatorInputEnvelope
    set?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    disconnect?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    delete?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    connect?: BMSWhereUniqueInput | BMSWhereUniqueInput[]
    update?: BMSUpdateWithWhereUniqueWithoutCreatorInput | BMSUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BMSUpdateManyWithWhereWithoutCreatorInput | BMSUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BMSScalarWhereInput | BMSScalarWhereInput[]
  }

  export type RaspiUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RaspiCreateWithoutCreatorInput, RaspiUncheckedCreateWithoutCreatorInput> | RaspiCreateWithoutCreatorInput[] | RaspiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaspiCreateOrConnectWithoutCreatorInput | RaspiCreateOrConnectWithoutCreatorInput[]
    upsert?: RaspiUpsertWithWhereUniqueWithoutCreatorInput | RaspiUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RaspiCreateManyCreatorInputEnvelope
    set?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    disconnect?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    delete?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    connect?: RaspiWhereUniqueInput | RaspiWhereUniqueInput[]
    update?: RaspiUpdateWithWhereUniqueWithoutCreatorInput | RaspiUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RaspiUpdateManyWithWhereWithoutCreatorInput | RaspiUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RaspiScalarWhereInput | RaspiScalarWhereInput[]
  }

  export type TiltSensorUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TiltSensorCreateWithoutCreatorInput, TiltSensorUncheckedCreateWithoutCreatorInput> | TiltSensorCreateWithoutCreatorInput[] | TiltSensorUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TiltSensorCreateOrConnectWithoutCreatorInput | TiltSensorCreateOrConnectWithoutCreatorInput[]
    upsert?: TiltSensorUpsertWithWhereUniqueWithoutCreatorInput | TiltSensorUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TiltSensorCreateManyCreatorInputEnvelope
    set?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    disconnect?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    delete?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    connect?: TiltSensorWhereUniqueInput | TiltSensorWhereUniqueInput[]
    update?: TiltSensorUpdateWithWhereUniqueWithoutCreatorInput | TiltSensorUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TiltSensorUpdateManyWithWhereWithoutCreatorInput | TiltSensorUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TiltSensorScalarWhereInput | TiltSensorScalarWhereInput[]
  }

  export type MopekaSensorCreatecalibrationPointsInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutMopekaSensorsInput = {
    create?: XOR<UserCreateWithoutMopekaSensorsInput, UserUncheckedCreateWithoutMopekaSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMopekaSensorsInput
    connect?: UserWhereUniqueInput
  }

  export type MopekaDataCreateNestedManyWithoutMopekaSensorInput = {
    create?: XOR<MopekaDataCreateWithoutMopekaSensorInput, MopekaDataUncheckedCreateWithoutMopekaSensorInput> | MopekaDataCreateWithoutMopekaSensorInput[] | MopekaDataUncheckedCreateWithoutMopekaSensorInput[]
    connectOrCreate?: MopekaDataCreateOrConnectWithoutMopekaSensorInput | MopekaDataCreateOrConnectWithoutMopekaSensorInput[]
    createMany?: MopekaDataCreateManyMopekaSensorInputEnvelope
    connect?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
  }

  export type MopekaDataUncheckedCreateNestedManyWithoutMopekaSensorInput = {
    create?: XOR<MopekaDataCreateWithoutMopekaSensorInput, MopekaDataUncheckedCreateWithoutMopekaSensorInput> | MopekaDataCreateWithoutMopekaSensorInput[] | MopekaDataUncheckedCreateWithoutMopekaSensorInput[]
    connectOrCreate?: MopekaDataCreateOrConnectWithoutMopekaSensorInput | MopekaDataCreateOrConnectWithoutMopekaSensorInput[]
    createMany?: MopekaDataCreateManyMopekaSensorInputEnvelope
    connect?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MopekaSensorUpdatecalibrationPointsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutMopekaSensorsNestedInput = {
    create?: XOR<UserCreateWithoutMopekaSensorsInput, UserUncheckedCreateWithoutMopekaSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMopekaSensorsInput
    upsert?: UserUpsertWithoutMopekaSensorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMopekaSensorsInput, UserUpdateWithoutMopekaSensorsInput>, UserUncheckedUpdateWithoutMopekaSensorsInput>
  }

  export type MopekaDataUpdateManyWithoutMopekaSensorNestedInput = {
    create?: XOR<MopekaDataCreateWithoutMopekaSensorInput, MopekaDataUncheckedCreateWithoutMopekaSensorInput> | MopekaDataCreateWithoutMopekaSensorInput[] | MopekaDataUncheckedCreateWithoutMopekaSensorInput[]
    connectOrCreate?: MopekaDataCreateOrConnectWithoutMopekaSensorInput | MopekaDataCreateOrConnectWithoutMopekaSensorInput[]
    upsert?: MopekaDataUpsertWithWhereUniqueWithoutMopekaSensorInput | MopekaDataUpsertWithWhereUniqueWithoutMopekaSensorInput[]
    createMany?: MopekaDataCreateManyMopekaSensorInputEnvelope
    set?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    disconnect?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    delete?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    connect?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    update?: MopekaDataUpdateWithWhereUniqueWithoutMopekaSensorInput | MopekaDataUpdateWithWhereUniqueWithoutMopekaSensorInput[]
    updateMany?: MopekaDataUpdateManyWithWhereWithoutMopekaSensorInput | MopekaDataUpdateManyWithWhereWithoutMopekaSensorInput[]
    deleteMany?: MopekaDataScalarWhereInput | MopekaDataScalarWhereInput[]
  }

  export type MopekaDataUncheckedUpdateManyWithoutMopekaSensorNestedInput = {
    create?: XOR<MopekaDataCreateWithoutMopekaSensorInput, MopekaDataUncheckedCreateWithoutMopekaSensorInput> | MopekaDataCreateWithoutMopekaSensorInput[] | MopekaDataUncheckedCreateWithoutMopekaSensorInput[]
    connectOrCreate?: MopekaDataCreateOrConnectWithoutMopekaSensorInput | MopekaDataCreateOrConnectWithoutMopekaSensorInput[]
    upsert?: MopekaDataUpsertWithWhereUniqueWithoutMopekaSensorInput | MopekaDataUpsertWithWhereUniqueWithoutMopekaSensorInput[]
    createMany?: MopekaDataCreateManyMopekaSensorInputEnvelope
    set?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    disconnect?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    delete?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    connect?: MopekaDataWhereUniqueInput | MopekaDataWhereUniqueInput[]
    update?: MopekaDataUpdateWithWhereUniqueWithoutMopekaSensorInput | MopekaDataUpdateWithWhereUniqueWithoutMopekaSensorInput[]
    updateMany?: MopekaDataUpdateManyWithWhereWithoutMopekaSensorInput | MopekaDataUpdateManyWithWhereWithoutMopekaSensorInput[]
    deleteMany?: MopekaDataScalarWhereInput | MopekaDataScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBmsSensorsInput = {
    create?: XOR<UserCreateWithoutBmsSensorsInput, UserUncheckedCreateWithoutBmsSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBmsSensorsInput
    connect?: UserWhereUniqueInput
  }

  export type BMSDataCreateNestedManyWithoutBmsInput = {
    create?: XOR<BMSDataCreateWithoutBmsInput, BMSDataUncheckedCreateWithoutBmsInput> | BMSDataCreateWithoutBmsInput[] | BMSDataUncheckedCreateWithoutBmsInput[]
    connectOrCreate?: BMSDataCreateOrConnectWithoutBmsInput | BMSDataCreateOrConnectWithoutBmsInput[]
    createMany?: BMSDataCreateManyBmsInputEnvelope
    connect?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
  }

  export type BMSDataUncheckedCreateNestedManyWithoutBmsInput = {
    create?: XOR<BMSDataCreateWithoutBmsInput, BMSDataUncheckedCreateWithoutBmsInput> | BMSDataCreateWithoutBmsInput[] | BMSDataUncheckedCreateWithoutBmsInput[]
    connectOrCreate?: BMSDataCreateOrConnectWithoutBmsInput | BMSDataCreateOrConnectWithoutBmsInput[]
    createMany?: BMSDataCreateManyBmsInputEnvelope
    connect?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBmsSensorsNestedInput = {
    create?: XOR<UserCreateWithoutBmsSensorsInput, UserUncheckedCreateWithoutBmsSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBmsSensorsInput
    upsert?: UserUpsertWithoutBmsSensorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBmsSensorsInput, UserUpdateWithoutBmsSensorsInput>, UserUncheckedUpdateWithoutBmsSensorsInput>
  }

  export type BMSDataUpdateManyWithoutBmsNestedInput = {
    create?: XOR<BMSDataCreateWithoutBmsInput, BMSDataUncheckedCreateWithoutBmsInput> | BMSDataCreateWithoutBmsInput[] | BMSDataUncheckedCreateWithoutBmsInput[]
    connectOrCreate?: BMSDataCreateOrConnectWithoutBmsInput | BMSDataCreateOrConnectWithoutBmsInput[]
    upsert?: BMSDataUpsertWithWhereUniqueWithoutBmsInput | BMSDataUpsertWithWhereUniqueWithoutBmsInput[]
    createMany?: BMSDataCreateManyBmsInputEnvelope
    set?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    disconnect?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    delete?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    connect?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    update?: BMSDataUpdateWithWhereUniqueWithoutBmsInput | BMSDataUpdateWithWhereUniqueWithoutBmsInput[]
    updateMany?: BMSDataUpdateManyWithWhereWithoutBmsInput | BMSDataUpdateManyWithWhereWithoutBmsInput[]
    deleteMany?: BMSDataScalarWhereInput | BMSDataScalarWhereInput[]
  }

  export type BMSDataUncheckedUpdateManyWithoutBmsNestedInput = {
    create?: XOR<BMSDataCreateWithoutBmsInput, BMSDataUncheckedCreateWithoutBmsInput> | BMSDataCreateWithoutBmsInput[] | BMSDataUncheckedCreateWithoutBmsInput[]
    connectOrCreate?: BMSDataCreateOrConnectWithoutBmsInput | BMSDataCreateOrConnectWithoutBmsInput[]
    upsert?: BMSDataUpsertWithWhereUniqueWithoutBmsInput | BMSDataUpsertWithWhereUniqueWithoutBmsInput[]
    createMany?: BMSDataCreateManyBmsInputEnvelope
    set?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    disconnect?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    delete?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    connect?: BMSDataWhereUniqueInput | BMSDataWhereUniqueInput[]
    update?: BMSDataUpdateWithWhereUniqueWithoutBmsInput | BMSDataUpdateWithWhereUniqueWithoutBmsInput[]
    updateMany?: BMSDataUpdateManyWithWhereWithoutBmsInput | BMSDataUpdateManyWithWhereWithoutBmsInput[]
    deleteMany?: BMSDataScalarWhereInput | BMSDataScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRaspiSensorsInput = {
    create?: XOR<UserCreateWithoutRaspiSensorsInput, UserUncheckedCreateWithoutRaspiSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaspiSensorsInput
    connect?: UserWhereUniqueInput
  }

  export type RaspiDataCreateNestedManyWithoutRaspiInput = {
    create?: XOR<RaspiDataCreateWithoutRaspiInput, RaspiDataUncheckedCreateWithoutRaspiInput> | RaspiDataCreateWithoutRaspiInput[] | RaspiDataUncheckedCreateWithoutRaspiInput[]
    connectOrCreate?: RaspiDataCreateOrConnectWithoutRaspiInput | RaspiDataCreateOrConnectWithoutRaspiInput[]
    createMany?: RaspiDataCreateManyRaspiInputEnvelope
    connect?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
  }

  export type RaspiDataUncheckedCreateNestedManyWithoutRaspiInput = {
    create?: XOR<RaspiDataCreateWithoutRaspiInput, RaspiDataUncheckedCreateWithoutRaspiInput> | RaspiDataCreateWithoutRaspiInput[] | RaspiDataUncheckedCreateWithoutRaspiInput[]
    connectOrCreate?: RaspiDataCreateOrConnectWithoutRaspiInput | RaspiDataCreateOrConnectWithoutRaspiInput[]
    createMany?: RaspiDataCreateManyRaspiInputEnvelope
    connect?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRaspiSensorsNestedInput = {
    create?: XOR<UserCreateWithoutRaspiSensorsInput, UserUncheckedCreateWithoutRaspiSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaspiSensorsInput
    upsert?: UserUpsertWithoutRaspiSensorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRaspiSensorsInput, UserUpdateWithoutRaspiSensorsInput>, UserUncheckedUpdateWithoutRaspiSensorsInput>
  }

  export type RaspiDataUpdateManyWithoutRaspiNestedInput = {
    create?: XOR<RaspiDataCreateWithoutRaspiInput, RaspiDataUncheckedCreateWithoutRaspiInput> | RaspiDataCreateWithoutRaspiInput[] | RaspiDataUncheckedCreateWithoutRaspiInput[]
    connectOrCreate?: RaspiDataCreateOrConnectWithoutRaspiInput | RaspiDataCreateOrConnectWithoutRaspiInput[]
    upsert?: RaspiDataUpsertWithWhereUniqueWithoutRaspiInput | RaspiDataUpsertWithWhereUniqueWithoutRaspiInput[]
    createMany?: RaspiDataCreateManyRaspiInputEnvelope
    set?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    disconnect?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    delete?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    connect?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    update?: RaspiDataUpdateWithWhereUniqueWithoutRaspiInput | RaspiDataUpdateWithWhereUniqueWithoutRaspiInput[]
    updateMany?: RaspiDataUpdateManyWithWhereWithoutRaspiInput | RaspiDataUpdateManyWithWhereWithoutRaspiInput[]
    deleteMany?: RaspiDataScalarWhereInput | RaspiDataScalarWhereInput[]
  }

  export type RaspiDataUncheckedUpdateManyWithoutRaspiNestedInput = {
    create?: XOR<RaspiDataCreateWithoutRaspiInput, RaspiDataUncheckedCreateWithoutRaspiInput> | RaspiDataCreateWithoutRaspiInput[] | RaspiDataUncheckedCreateWithoutRaspiInput[]
    connectOrCreate?: RaspiDataCreateOrConnectWithoutRaspiInput | RaspiDataCreateOrConnectWithoutRaspiInput[]
    upsert?: RaspiDataUpsertWithWhereUniqueWithoutRaspiInput | RaspiDataUpsertWithWhereUniqueWithoutRaspiInput[]
    createMany?: RaspiDataCreateManyRaspiInputEnvelope
    set?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    disconnect?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    delete?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    connect?: RaspiDataWhereUniqueInput | RaspiDataWhereUniqueInput[]
    update?: RaspiDataUpdateWithWhereUniqueWithoutRaspiInput | RaspiDataUpdateWithWhereUniqueWithoutRaspiInput[]
    updateMany?: RaspiDataUpdateManyWithWhereWithoutRaspiInput | RaspiDataUpdateManyWithWhereWithoutRaspiInput[]
    deleteMany?: RaspiDataScalarWhereInput | RaspiDataScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTiltSensorsInput = {
    create?: XOR<UserCreateWithoutTiltSensorsInput, UserUncheckedCreateWithoutTiltSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTiltSensorsInput
    connect?: UserWhereUniqueInput
  }

  export type TiltDataCreateNestedManyWithoutTiltSensorInput = {
    create?: XOR<TiltDataCreateWithoutTiltSensorInput, TiltDataUncheckedCreateWithoutTiltSensorInput> | TiltDataCreateWithoutTiltSensorInput[] | TiltDataUncheckedCreateWithoutTiltSensorInput[]
    connectOrCreate?: TiltDataCreateOrConnectWithoutTiltSensorInput | TiltDataCreateOrConnectWithoutTiltSensorInput[]
    createMany?: TiltDataCreateManyTiltSensorInputEnvelope
    connect?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
  }

  export type TiltDataUncheckedCreateNestedManyWithoutTiltSensorInput = {
    create?: XOR<TiltDataCreateWithoutTiltSensorInput, TiltDataUncheckedCreateWithoutTiltSensorInput> | TiltDataCreateWithoutTiltSensorInput[] | TiltDataUncheckedCreateWithoutTiltSensorInput[]
    connectOrCreate?: TiltDataCreateOrConnectWithoutTiltSensorInput | TiltDataCreateOrConnectWithoutTiltSensorInput[]
    createMany?: TiltDataCreateManyTiltSensorInputEnvelope
    connect?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTiltSensorsNestedInput = {
    create?: XOR<UserCreateWithoutTiltSensorsInput, UserUncheckedCreateWithoutTiltSensorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTiltSensorsInput
    upsert?: UserUpsertWithoutTiltSensorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTiltSensorsInput, UserUpdateWithoutTiltSensorsInput>, UserUncheckedUpdateWithoutTiltSensorsInput>
  }

  export type TiltDataUpdateManyWithoutTiltSensorNestedInput = {
    create?: XOR<TiltDataCreateWithoutTiltSensorInput, TiltDataUncheckedCreateWithoutTiltSensorInput> | TiltDataCreateWithoutTiltSensorInput[] | TiltDataUncheckedCreateWithoutTiltSensorInput[]
    connectOrCreate?: TiltDataCreateOrConnectWithoutTiltSensorInput | TiltDataCreateOrConnectWithoutTiltSensorInput[]
    upsert?: TiltDataUpsertWithWhereUniqueWithoutTiltSensorInput | TiltDataUpsertWithWhereUniqueWithoutTiltSensorInput[]
    createMany?: TiltDataCreateManyTiltSensorInputEnvelope
    set?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    disconnect?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    delete?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    connect?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    update?: TiltDataUpdateWithWhereUniqueWithoutTiltSensorInput | TiltDataUpdateWithWhereUniqueWithoutTiltSensorInput[]
    updateMany?: TiltDataUpdateManyWithWhereWithoutTiltSensorInput | TiltDataUpdateManyWithWhereWithoutTiltSensorInput[]
    deleteMany?: TiltDataScalarWhereInput | TiltDataScalarWhereInput[]
  }

  export type TiltDataUncheckedUpdateManyWithoutTiltSensorNestedInput = {
    create?: XOR<TiltDataCreateWithoutTiltSensorInput, TiltDataUncheckedCreateWithoutTiltSensorInput> | TiltDataCreateWithoutTiltSensorInput[] | TiltDataUncheckedCreateWithoutTiltSensorInput[]
    connectOrCreate?: TiltDataCreateOrConnectWithoutTiltSensorInput | TiltDataCreateOrConnectWithoutTiltSensorInput[]
    upsert?: TiltDataUpsertWithWhereUniqueWithoutTiltSensorInput | TiltDataUpsertWithWhereUniqueWithoutTiltSensorInput[]
    createMany?: TiltDataCreateManyTiltSensorInputEnvelope
    set?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    disconnect?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    delete?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    connect?: TiltDataWhereUniqueInput | TiltDataWhereUniqueInput[]
    update?: TiltDataUpdateWithWhereUniqueWithoutTiltSensorInput | TiltDataUpdateWithWhereUniqueWithoutTiltSensorInput[]
    updateMany?: TiltDataUpdateManyWithWhereWithoutTiltSensorInput | TiltDataUpdateManyWithWhereWithoutTiltSensorInput[]
    deleteMany?: TiltDataScalarWhereInput | TiltDataScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RaspiCreateNestedOneWithoutRaspiDataInput = {
    create?: XOR<RaspiCreateWithoutRaspiDataInput, RaspiUncheckedCreateWithoutRaspiDataInput>
    connectOrCreate?: RaspiCreateOrConnectWithoutRaspiDataInput
    connect?: RaspiWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RaspiUpdateOneRequiredWithoutRaspiDataNestedInput = {
    create?: XOR<RaspiCreateWithoutRaspiDataInput, RaspiUncheckedCreateWithoutRaspiDataInput>
    connectOrCreate?: RaspiCreateOrConnectWithoutRaspiDataInput
    upsert?: RaspiUpsertWithoutRaspiDataInput
    connect?: RaspiWhereUniqueInput
    update?: XOR<XOR<RaspiUpdateToOneWithWhereWithoutRaspiDataInput, RaspiUpdateWithoutRaspiDataInput>, RaspiUncheckedUpdateWithoutRaspiDataInput>
  }

  export type TiltSensorCreateNestedOneWithoutTiltDataInput = {
    create?: XOR<TiltSensorCreateWithoutTiltDataInput, TiltSensorUncheckedCreateWithoutTiltDataInput>
    connectOrCreate?: TiltSensorCreateOrConnectWithoutTiltDataInput
    connect?: TiltSensorWhereUniqueInput
  }

  export type TiltSensorUpdateOneRequiredWithoutTiltDataNestedInput = {
    create?: XOR<TiltSensorCreateWithoutTiltDataInput, TiltSensorUncheckedCreateWithoutTiltDataInput>
    connectOrCreate?: TiltSensorCreateOrConnectWithoutTiltDataInput
    upsert?: TiltSensorUpsertWithoutTiltDataInput
    connect?: TiltSensorWhereUniqueInput
    update?: XOR<XOR<TiltSensorUpdateToOneWithWhereWithoutTiltDataInput, TiltSensorUpdateWithoutTiltDataInput>, TiltSensorUncheckedUpdateWithoutTiltDataInput>
  }

  export type BMSCreateNestedOneWithoutBmsDataInput = {
    create?: XOR<BMSCreateWithoutBmsDataInput, BMSUncheckedCreateWithoutBmsDataInput>
    connectOrCreate?: BMSCreateOrConnectWithoutBmsDataInput
    connect?: BMSWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BMSUpdateOneRequiredWithoutBmsDataNestedInput = {
    create?: XOR<BMSCreateWithoutBmsDataInput, BMSUncheckedCreateWithoutBmsDataInput>
    connectOrCreate?: BMSCreateOrConnectWithoutBmsDataInput
    upsert?: BMSUpsertWithoutBmsDataInput
    connect?: BMSWhereUniqueInput
    update?: XOR<XOR<BMSUpdateToOneWithWhereWithoutBmsDataInput, BMSUpdateWithoutBmsDataInput>, BMSUncheckedUpdateWithoutBmsDataInput>
  }

  export type MopekaSensorCreateNestedOneWithoutMopekaDataInput = {
    create?: XOR<MopekaSensorCreateWithoutMopekaDataInput, MopekaSensorUncheckedCreateWithoutMopekaDataInput>
    connectOrCreate?: MopekaSensorCreateOrConnectWithoutMopekaDataInput
    connect?: MopekaSensorWhereUniqueInput
  }

  export type MopekaSensorUpdateOneRequiredWithoutMopekaDataNestedInput = {
    create?: XOR<MopekaSensorCreateWithoutMopekaDataInput, MopekaSensorUncheckedCreateWithoutMopekaDataInput>
    connectOrCreate?: MopekaSensorCreateOrConnectWithoutMopekaDataInput
    upsert?: MopekaSensorUpsertWithoutMopekaDataInput
    connect?: MopekaSensorWhereUniqueInput
    update?: XOR<XOR<MopekaSensorUpdateToOneWithWhereWithoutMopekaDataInput, MopekaSensorUpdateWithoutMopekaDataInput>, MopekaSensorUncheckedUpdateWithoutMopekaDataInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MopekaSensorCreateWithoutCreatorInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaData?: MopekaDataCreateNestedManyWithoutMopekaSensorInput
  }

  export type MopekaSensorUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaData?: MopekaDataUncheckedCreateNestedManyWithoutMopekaSensorInput
  }

  export type MopekaSensorCreateOrConnectWithoutCreatorInput = {
    where: MopekaSensorWhereUniqueInput
    create: XOR<MopekaSensorCreateWithoutCreatorInput, MopekaSensorUncheckedCreateWithoutCreatorInput>
  }

  export type MopekaSensorCreateManyCreatorInputEnvelope = {
    data: MopekaSensorCreateManyCreatorInput | MopekaSensorCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BMSCreateWithoutCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bmsData?: BMSDataCreateNestedManyWithoutBmsInput
  }

  export type BMSUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bmsData?: BMSDataUncheckedCreateNestedManyWithoutBmsInput
  }

  export type BMSCreateOrConnectWithoutCreatorInput = {
    where: BMSWhereUniqueInput
    create: XOR<BMSCreateWithoutCreatorInput, BMSUncheckedCreateWithoutCreatorInput>
  }

  export type BMSCreateManyCreatorInputEnvelope = {
    data: BMSCreateManyCreatorInput | BMSCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type RaspiCreateWithoutCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    raspiData?: RaspiDataCreateNestedManyWithoutRaspiInput
  }

  export type RaspiUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    raspiData?: RaspiDataUncheckedCreateNestedManyWithoutRaspiInput
  }

  export type RaspiCreateOrConnectWithoutCreatorInput = {
    where: RaspiWhereUniqueInput
    create: XOR<RaspiCreateWithoutCreatorInput, RaspiUncheckedCreateWithoutCreatorInput>
  }

  export type RaspiCreateManyCreatorInputEnvelope = {
    data: RaspiCreateManyCreatorInput | RaspiCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type TiltSensorCreateWithoutCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tiltData?: TiltDataCreateNestedManyWithoutTiltSensorInput
  }

  export type TiltSensorUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tiltData?: TiltDataUncheckedCreateNestedManyWithoutTiltSensorInput
  }

  export type TiltSensorCreateOrConnectWithoutCreatorInput = {
    where: TiltSensorWhereUniqueInput
    create: XOR<TiltSensorCreateWithoutCreatorInput, TiltSensorUncheckedCreateWithoutCreatorInput>
  }

  export type TiltSensorCreateManyCreatorInputEnvelope = {
    data: TiltSensorCreateManyCreatorInput | TiltSensorCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MopekaSensorUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MopekaSensorWhereUniqueInput
    update: XOR<MopekaSensorUpdateWithoutCreatorInput, MopekaSensorUncheckedUpdateWithoutCreatorInput>
    create: XOR<MopekaSensorCreateWithoutCreatorInput, MopekaSensorUncheckedCreateWithoutCreatorInput>
  }

  export type MopekaSensorUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MopekaSensorWhereUniqueInput
    data: XOR<MopekaSensorUpdateWithoutCreatorInput, MopekaSensorUncheckedUpdateWithoutCreatorInput>
  }

  export type MopekaSensorUpdateManyWithWhereWithoutCreatorInput = {
    where: MopekaSensorScalarWhereInput
    data: XOR<MopekaSensorUpdateManyMutationInput, MopekaSensorUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MopekaSensorScalarWhereInput = {
    AND?: MopekaSensorScalarWhereInput | MopekaSensorScalarWhereInput[]
    OR?: MopekaSensorScalarWhereInput[]
    NOT?: MopekaSensorScalarWhereInput | MopekaSensorScalarWhereInput[]
    id?: StringFilter<"MopekaSensor"> | string
    name?: StringFilter<"MopekaSensor"> | string
    sensorId?: StringFilter<"MopekaSensor"> | string
    mqttTopic?: StringFilter<"MopekaSensor"> | string
    mediumType?: StringFilter<"MopekaSensor"> | string
    tankSizeGallon?: FloatFilter<"MopekaSensor"> | number
    tankSizeInch?: FloatFilter<"MopekaSensor"> | number
    threshold?: FloatFilter<"MopekaSensor"> | number
    heightOffset?: FloatFilter<"MopekaSensor"> | number
    trailerId?: StringFilter<"MopekaSensor"> | string
    calibrationPoints?: FloatNullableListFilter<"MopekaSensor">
    createdBy?: StringFilter<"MopekaSensor"> | string
    createdAt?: DateTimeFilter<"MopekaSensor"> | Date | string
    updatedAt?: DateTimeFilter<"MopekaSensor"> | Date | string
  }

  export type BMSUpsertWithWhereUniqueWithoutCreatorInput = {
    where: BMSWhereUniqueInput
    update: XOR<BMSUpdateWithoutCreatorInput, BMSUncheckedUpdateWithoutCreatorInput>
    create: XOR<BMSCreateWithoutCreatorInput, BMSUncheckedCreateWithoutCreatorInput>
  }

  export type BMSUpdateWithWhereUniqueWithoutCreatorInput = {
    where: BMSWhereUniqueInput
    data: XOR<BMSUpdateWithoutCreatorInput, BMSUncheckedUpdateWithoutCreatorInput>
  }

  export type BMSUpdateManyWithWhereWithoutCreatorInput = {
    where: BMSScalarWhereInput
    data: XOR<BMSUpdateManyMutationInput, BMSUncheckedUpdateManyWithoutCreatorInput>
  }

  export type BMSScalarWhereInput = {
    AND?: BMSScalarWhereInput | BMSScalarWhereInput[]
    OR?: BMSScalarWhereInput[]
    NOT?: BMSScalarWhereInput | BMSScalarWhereInput[]
    id?: StringFilter<"BMS"> | string
    name?: StringFilter<"BMS"> | string
    deviceName?: StringFilter<"BMS"> | string
    mqttTopic?: StringFilter<"BMS"> | string
    threshold?: FloatFilter<"BMS"> | number
    trailerId?: StringFilter<"BMS"> | string
    createdBy?: StringFilter<"BMS"> | string
    createdAt?: DateTimeFilter<"BMS"> | Date | string
    updatedAt?: DateTimeFilter<"BMS"> | Date | string
  }

  export type RaspiUpsertWithWhereUniqueWithoutCreatorInput = {
    where: RaspiWhereUniqueInput
    update: XOR<RaspiUpdateWithoutCreatorInput, RaspiUncheckedUpdateWithoutCreatorInput>
    create: XOR<RaspiCreateWithoutCreatorInput, RaspiUncheckedCreateWithoutCreatorInput>
  }

  export type RaspiUpdateWithWhereUniqueWithoutCreatorInput = {
    where: RaspiWhereUniqueInput
    data: XOR<RaspiUpdateWithoutCreatorInput, RaspiUncheckedUpdateWithoutCreatorInput>
  }

  export type RaspiUpdateManyWithWhereWithoutCreatorInput = {
    where: RaspiScalarWhereInput
    data: XOR<RaspiUpdateManyMutationInput, RaspiUncheckedUpdateManyWithoutCreatorInput>
  }

  export type RaspiScalarWhereInput = {
    AND?: RaspiScalarWhereInput | RaspiScalarWhereInput[]
    OR?: RaspiScalarWhereInput[]
    NOT?: RaspiScalarWhereInput | RaspiScalarWhereInput[]
    id?: StringFilter<"Raspi"> | string
    name?: StringFilter<"Raspi"> | string
    deviceName?: StringFilter<"Raspi"> | string
    mqttTopic?: StringFilter<"Raspi"> | string
    helicopterId?: StringNullableFilter<"Raspi"> | string | null
    trailerId?: StringNullableFilter<"Raspi"> | string | null
    createdBy?: StringFilter<"Raspi"> | string
    createdAt?: DateTimeFilter<"Raspi"> | Date | string
    updatedAt?: DateTimeFilter<"Raspi"> | Date | string
  }

  export type TiltSensorUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TiltSensorWhereUniqueInput
    update: XOR<TiltSensorUpdateWithoutCreatorInput, TiltSensorUncheckedUpdateWithoutCreatorInput>
    create: XOR<TiltSensorCreateWithoutCreatorInput, TiltSensorUncheckedCreateWithoutCreatorInput>
  }

  export type TiltSensorUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TiltSensorWhereUniqueInput
    data: XOR<TiltSensorUpdateWithoutCreatorInput, TiltSensorUncheckedUpdateWithoutCreatorInput>
  }

  export type TiltSensorUpdateManyWithWhereWithoutCreatorInput = {
    where: TiltSensorScalarWhereInput
    data: XOR<TiltSensorUpdateManyMutationInput, TiltSensorUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TiltSensorScalarWhereInput = {
    AND?: TiltSensorScalarWhereInput | TiltSensorScalarWhereInput[]
    OR?: TiltSensorScalarWhereInput[]
    NOT?: TiltSensorScalarWhereInput | TiltSensorScalarWhereInput[]
    id?: StringFilter<"TiltSensor"> | string
    name?: StringFilter<"TiltSensor"> | string
    deviceName?: StringFilter<"TiltSensor"> | string
    mqttTopic?: StringFilter<"TiltSensor"> | string
    helicopterId?: StringNullableFilter<"TiltSensor"> | string | null
    trailerId?: StringNullableFilter<"TiltSensor"> | string | null
    createdBy?: StringFilter<"TiltSensor"> | string
    createdAt?: DateTimeFilter<"TiltSensor"> | Date | string
    updatedAt?: DateTimeFilter<"TiltSensor"> | Date | string
  }

  export type UserCreateWithoutMopekaSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmsSensors?: BMSCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutMopekaSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmsSensors?: BMSUncheckedCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiUncheckedCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutMopekaSensorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMopekaSensorsInput, UserUncheckedCreateWithoutMopekaSensorsInput>
  }

  export type MopekaDataCreateWithoutMopekaSensorInput = {
    id?: string
    rawBattery?: number | null
    batteryVolt?: number | null
    batteryPercent?: number | null
    rawTemp?: number | null
    tempCelsius?: number | null
    tempFahrenheit?: number | null
    readingQuality?: number | null
    tankLevelRaw?: number | null
    tankLevelNonCompensatedMm?: number | null
    tankLevelNonCompensatedIn?: number | null
    tankLevelCompensatedMm?: number | null
    tankLevelCompensatedInch?: number | null
    accelX?: number | null
    accelY?: number | null
    angle?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaDataUncheckedCreateWithoutMopekaSensorInput = {
    id?: string
    rawBattery?: number | null
    batteryVolt?: number | null
    batteryPercent?: number | null
    rawTemp?: number | null
    tempCelsius?: number | null
    tempFahrenheit?: number | null
    readingQuality?: number | null
    tankLevelRaw?: number | null
    tankLevelNonCompensatedMm?: number | null
    tankLevelNonCompensatedIn?: number | null
    tankLevelCompensatedMm?: number | null
    tankLevelCompensatedInch?: number | null
    accelX?: number | null
    accelY?: number | null
    angle?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaDataCreateOrConnectWithoutMopekaSensorInput = {
    where: MopekaDataWhereUniqueInput
    create: XOR<MopekaDataCreateWithoutMopekaSensorInput, MopekaDataUncheckedCreateWithoutMopekaSensorInput>
  }

  export type MopekaDataCreateManyMopekaSensorInputEnvelope = {
    data: MopekaDataCreateManyMopekaSensorInput | MopekaDataCreateManyMopekaSensorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMopekaSensorsInput = {
    update: XOR<UserUpdateWithoutMopekaSensorsInput, UserUncheckedUpdateWithoutMopekaSensorsInput>
    create: XOR<UserCreateWithoutMopekaSensorsInput, UserUncheckedCreateWithoutMopekaSensorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMopekaSensorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMopekaSensorsInput, UserUncheckedUpdateWithoutMopekaSensorsInput>
  }

  export type UserUpdateWithoutMopekaSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmsSensors?: BMSUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMopekaSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmsSensors?: BMSUncheckedUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUncheckedUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type MopekaDataUpsertWithWhereUniqueWithoutMopekaSensorInput = {
    where: MopekaDataWhereUniqueInput
    update: XOR<MopekaDataUpdateWithoutMopekaSensorInput, MopekaDataUncheckedUpdateWithoutMopekaSensorInput>
    create: XOR<MopekaDataCreateWithoutMopekaSensorInput, MopekaDataUncheckedCreateWithoutMopekaSensorInput>
  }

  export type MopekaDataUpdateWithWhereUniqueWithoutMopekaSensorInput = {
    where: MopekaDataWhereUniqueInput
    data: XOR<MopekaDataUpdateWithoutMopekaSensorInput, MopekaDataUncheckedUpdateWithoutMopekaSensorInput>
  }

  export type MopekaDataUpdateManyWithWhereWithoutMopekaSensorInput = {
    where: MopekaDataScalarWhereInput
    data: XOR<MopekaDataUpdateManyMutationInput, MopekaDataUncheckedUpdateManyWithoutMopekaSensorInput>
  }

  export type MopekaDataScalarWhereInput = {
    AND?: MopekaDataScalarWhereInput | MopekaDataScalarWhereInput[]
    OR?: MopekaDataScalarWhereInput[]
    NOT?: MopekaDataScalarWhereInput | MopekaDataScalarWhereInput[]
    id?: StringFilter<"MopekaData"> | string
    mopekaSensorId?: StringFilter<"MopekaData"> | string
    rawBattery?: FloatNullableFilter<"MopekaData"> | number | null
    batteryVolt?: FloatNullableFilter<"MopekaData"> | number | null
    batteryPercent?: FloatNullableFilter<"MopekaData"> | number | null
    rawTemp?: FloatNullableFilter<"MopekaData"> | number | null
    tempCelsius?: FloatNullableFilter<"MopekaData"> | number | null
    tempFahrenheit?: FloatNullableFilter<"MopekaData"> | number | null
    readingQuality?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelRaw?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedMm?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelNonCompensatedIn?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelCompensatedMm?: FloatNullableFilter<"MopekaData"> | number | null
    tankLevelCompensatedInch?: FloatNullableFilter<"MopekaData"> | number | null
    accelX?: FloatNullableFilter<"MopekaData"> | number | null
    accelY?: FloatNullableFilter<"MopekaData"> | number | null
    angle?: FloatNullableFilter<"MopekaData"> | number | null
    createdAt?: DateTimeFilter<"MopekaData"> | Date | string
    updatedAt?: DateTimeFilter<"MopekaData"> | Date | string
  }

  export type UserCreateWithoutBmsSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutBmsSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorUncheckedCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiUncheckedCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutBmsSensorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBmsSensorsInput, UserUncheckedCreateWithoutBmsSensorsInput>
  }

  export type BMSDataCreateWithoutBmsInput = {
    id?: string
    stateOfCharge?: number | null
    totalVoltage?: number | null
    current?: number | null
    power?: number | null
    remainingCapacity?: number | null
    nominalCapacity?: number | null
    chargingCycles?: number | null
    deltaCellVoltage?: number | null
    softwareVersion?: string | null
    errors?: string | null
    balancingActive?: boolean | null
    cell1Voltage?: number | null
    cell2Voltage?: number | null
    cell3Voltage?: number | null
    cell4Voltage?: number | null
    temp1?: number | null
    temp2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSDataUncheckedCreateWithoutBmsInput = {
    id?: string
    stateOfCharge?: number | null
    totalVoltage?: number | null
    current?: number | null
    power?: number | null
    remainingCapacity?: number | null
    nominalCapacity?: number | null
    chargingCycles?: number | null
    deltaCellVoltage?: number | null
    softwareVersion?: string | null
    errors?: string | null
    balancingActive?: boolean | null
    cell1Voltage?: number | null
    cell2Voltage?: number | null
    cell3Voltage?: number | null
    cell4Voltage?: number | null
    temp1?: number | null
    temp2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSDataCreateOrConnectWithoutBmsInput = {
    where: BMSDataWhereUniqueInput
    create: XOR<BMSDataCreateWithoutBmsInput, BMSDataUncheckedCreateWithoutBmsInput>
  }

  export type BMSDataCreateManyBmsInputEnvelope = {
    data: BMSDataCreateManyBmsInput | BMSDataCreateManyBmsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBmsSensorsInput = {
    update: XOR<UserUpdateWithoutBmsSensorsInput, UserUncheckedUpdateWithoutBmsSensorsInput>
    create: XOR<UserCreateWithoutBmsSensorsInput, UserUncheckedCreateWithoutBmsSensorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBmsSensorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBmsSensorsInput, UserUncheckedUpdateWithoutBmsSensorsInput>
  }

  export type UserUpdateWithoutBmsSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutBmsSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUncheckedUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUncheckedUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type BMSDataUpsertWithWhereUniqueWithoutBmsInput = {
    where: BMSDataWhereUniqueInput
    update: XOR<BMSDataUpdateWithoutBmsInput, BMSDataUncheckedUpdateWithoutBmsInput>
    create: XOR<BMSDataCreateWithoutBmsInput, BMSDataUncheckedCreateWithoutBmsInput>
  }

  export type BMSDataUpdateWithWhereUniqueWithoutBmsInput = {
    where: BMSDataWhereUniqueInput
    data: XOR<BMSDataUpdateWithoutBmsInput, BMSDataUncheckedUpdateWithoutBmsInput>
  }

  export type BMSDataUpdateManyWithWhereWithoutBmsInput = {
    where: BMSDataScalarWhereInput
    data: XOR<BMSDataUpdateManyMutationInput, BMSDataUncheckedUpdateManyWithoutBmsInput>
  }

  export type BMSDataScalarWhereInput = {
    AND?: BMSDataScalarWhereInput | BMSDataScalarWhereInput[]
    OR?: BMSDataScalarWhereInput[]
    NOT?: BMSDataScalarWhereInput | BMSDataScalarWhereInput[]
    id?: StringFilter<"BMSData"> | string
    bmsId?: StringFilter<"BMSData"> | string
    stateOfCharge?: FloatNullableFilter<"BMSData"> | number | null
    totalVoltage?: FloatNullableFilter<"BMSData"> | number | null
    current?: FloatNullableFilter<"BMSData"> | number | null
    power?: FloatNullableFilter<"BMSData"> | number | null
    remainingCapacity?: FloatNullableFilter<"BMSData"> | number | null
    nominalCapacity?: FloatNullableFilter<"BMSData"> | number | null
    chargingCycles?: IntNullableFilter<"BMSData"> | number | null
    deltaCellVoltage?: FloatNullableFilter<"BMSData"> | number | null
    softwareVersion?: StringNullableFilter<"BMSData"> | string | null
    errors?: StringNullableFilter<"BMSData"> | string | null
    balancingActive?: BoolNullableFilter<"BMSData"> | boolean | null
    cell1Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell2Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell3Voltage?: FloatNullableFilter<"BMSData"> | number | null
    cell4Voltage?: FloatNullableFilter<"BMSData"> | number | null
    temp1?: FloatNullableFilter<"BMSData"> | number | null
    temp2?: FloatNullableFilter<"BMSData"> | number | null
    createdAt?: DateTimeFilter<"BMSData"> | Date | string
    updatedAt?: DateTimeFilter<"BMSData"> | Date | string
  }

  export type UserCreateWithoutRaspiSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorCreateNestedManyWithoutCreatorInput
    bmsSensors?: BMSCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutRaspiSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorUncheckedCreateNestedManyWithoutCreatorInput
    bmsSensors?: BMSUncheckedCreateNestedManyWithoutCreatorInput
    tiltSensors?: TiltSensorUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRaspiSensorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRaspiSensorsInput, UserUncheckedCreateWithoutRaspiSensorsInput>
  }

  export type RaspiDataCreateWithoutRaspiInput = {
    id?: string
    cht1?: number | null
    cht2?: number | null
    cht3?: number | null
    cht4?: number | null
    cht5?: number | null
    cht6?: number | null
    egt1?: number | null
    egt2?: number | null
    egt3?: number | null
    egt4?: number | null
    egt5?: number | null
    egt6?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiDataUncheckedCreateWithoutRaspiInput = {
    id?: string
    cht1?: number | null
    cht2?: number | null
    cht3?: number | null
    cht4?: number | null
    cht5?: number | null
    cht6?: number | null
    egt1?: number | null
    egt2?: number | null
    egt3?: number | null
    egt4?: number | null
    egt5?: number | null
    egt6?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiDataCreateOrConnectWithoutRaspiInput = {
    where: RaspiDataWhereUniqueInput
    create: XOR<RaspiDataCreateWithoutRaspiInput, RaspiDataUncheckedCreateWithoutRaspiInput>
  }

  export type RaspiDataCreateManyRaspiInputEnvelope = {
    data: RaspiDataCreateManyRaspiInput | RaspiDataCreateManyRaspiInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRaspiSensorsInput = {
    update: XOR<UserUpdateWithoutRaspiSensorsInput, UserUncheckedUpdateWithoutRaspiSensorsInput>
    create: XOR<UserCreateWithoutRaspiSensorsInput, UserUncheckedCreateWithoutRaspiSensorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRaspiSensorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRaspiSensorsInput, UserUncheckedUpdateWithoutRaspiSensorsInput>
  }

  export type UserUpdateWithoutRaspiSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUpdateManyWithoutCreatorNestedInput
    bmsSensors?: BMSUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutRaspiSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUncheckedUpdateManyWithoutCreatorNestedInput
    bmsSensors?: BMSUncheckedUpdateManyWithoutCreatorNestedInput
    tiltSensors?: TiltSensorUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type RaspiDataUpsertWithWhereUniqueWithoutRaspiInput = {
    where: RaspiDataWhereUniqueInput
    update: XOR<RaspiDataUpdateWithoutRaspiInput, RaspiDataUncheckedUpdateWithoutRaspiInput>
    create: XOR<RaspiDataCreateWithoutRaspiInput, RaspiDataUncheckedCreateWithoutRaspiInput>
  }

  export type RaspiDataUpdateWithWhereUniqueWithoutRaspiInput = {
    where: RaspiDataWhereUniqueInput
    data: XOR<RaspiDataUpdateWithoutRaspiInput, RaspiDataUncheckedUpdateWithoutRaspiInput>
  }

  export type RaspiDataUpdateManyWithWhereWithoutRaspiInput = {
    where: RaspiDataScalarWhereInput
    data: XOR<RaspiDataUpdateManyMutationInput, RaspiDataUncheckedUpdateManyWithoutRaspiInput>
  }

  export type RaspiDataScalarWhereInput = {
    AND?: RaspiDataScalarWhereInput | RaspiDataScalarWhereInput[]
    OR?: RaspiDataScalarWhereInput[]
    NOT?: RaspiDataScalarWhereInput | RaspiDataScalarWhereInput[]
    id?: StringFilter<"RaspiData"> | string
    raspiId?: StringFilter<"RaspiData"> | string
    cht1?: FloatNullableFilter<"RaspiData"> | number | null
    cht2?: FloatNullableFilter<"RaspiData"> | number | null
    cht3?: FloatNullableFilter<"RaspiData"> | number | null
    cht4?: FloatNullableFilter<"RaspiData"> | number | null
    cht5?: FloatNullableFilter<"RaspiData"> | number | null
    cht6?: FloatNullableFilter<"RaspiData"> | number | null
    egt1?: FloatNullableFilter<"RaspiData"> | number | null
    egt2?: FloatNullableFilter<"RaspiData"> | number | null
    egt3?: FloatNullableFilter<"RaspiData"> | number | null
    egt4?: FloatNullableFilter<"RaspiData"> | number | null
    egt5?: FloatNullableFilter<"RaspiData"> | number | null
    egt6?: FloatNullableFilter<"RaspiData"> | number | null
    createdAt?: DateTimeFilter<"RaspiData"> | Date | string
    updatedAt?: DateTimeFilter<"RaspiData"> | Date | string
  }

  export type UserCreateWithoutTiltSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorCreateNestedManyWithoutCreatorInput
    bmsSensors?: BMSCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutTiltSensorsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mopekaSensors?: MopekaSensorUncheckedCreateNestedManyWithoutCreatorInput
    bmsSensors?: BMSUncheckedCreateNestedManyWithoutCreatorInput
    raspiSensors?: RaspiUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutTiltSensorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTiltSensorsInput, UserUncheckedCreateWithoutTiltSensorsInput>
  }

  export type TiltDataCreateWithoutTiltSensorInput = {
    id?: string
    accX?: number | null
    accY?: number | null
    accZ?: number | null
    gyroX?: number | null
    gyroY?: number | null
    gyroZ?: number | null
    magX?: number | null
    magY?: number | null
    magZ?: number | null
    angleX?: number | null
    angleY?: number | null
    angleZ?: number | null
    quat0?: number | null
    quat1?: number | null
    quat2?: number | null
    quat3?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltDataUncheckedCreateWithoutTiltSensorInput = {
    id?: string
    accX?: number | null
    accY?: number | null
    accZ?: number | null
    gyroX?: number | null
    gyroY?: number | null
    gyroZ?: number | null
    magX?: number | null
    magY?: number | null
    magZ?: number | null
    angleX?: number | null
    angleY?: number | null
    angleZ?: number | null
    quat0?: number | null
    quat1?: number | null
    quat2?: number | null
    quat3?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltDataCreateOrConnectWithoutTiltSensorInput = {
    where: TiltDataWhereUniqueInput
    create: XOR<TiltDataCreateWithoutTiltSensorInput, TiltDataUncheckedCreateWithoutTiltSensorInput>
  }

  export type TiltDataCreateManyTiltSensorInputEnvelope = {
    data: TiltDataCreateManyTiltSensorInput | TiltDataCreateManyTiltSensorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTiltSensorsInput = {
    update: XOR<UserUpdateWithoutTiltSensorsInput, UserUncheckedUpdateWithoutTiltSensorsInput>
    create: XOR<UserCreateWithoutTiltSensorsInput, UserUncheckedCreateWithoutTiltSensorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTiltSensorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTiltSensorsInput, UserUncheckedUpdateWithoutTiltSensorsInput>
  }

  export type UserUpdateWithoutTiltSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUpdateManyWithoutCreatorNestedInput
    bmsSensors?: BMSUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutTiltSensorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaSensors?: MopekaSensorUncheckedUpdateManyWithoutCreatorNestedInput
    bmsSensors?: BMSUncheckedUpdateManyWithoutCreatorNestedInput
    raspiSensors?: RaspiUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TiltDataUpsertWithWhereUniqueWithoutTiltSensorInput = {
    where: TiltDataWhereUniqueInput
    update: XOR<TiltDataUpdateWithoutTiltSensorInput, TiltDataUncheckedUpdateWithoutTiltSensorInput>
    create: XOR<TiltDataCreateWithoutTiltSensorInput, TiltDataUncheckedCreateWithoutTiltSensorInput>
  }

  export type TiltDataUpdateWithWhereUniqueWithoutTiltSensorInput = {
    where: TiltDataWhereUniqueInput
    data: XOR<TiltDataUpdateWithoutTiltSensorInput, TiltDataUncheckedUpdateWithoutTiltSensorInput>
  }

  export type TiltDataUpdateManyWithWhereWithoutTiltSensorInput = {
    where: TiltDataScalarWhereInput
    data: XOR<TiltDataUpdateManyMutationInput, TiltDataUncheckedUpdateManyWithoutTiltSensorInput>
  }

  export type TiltDataScalarWhereInput = {
    AND?: TiltDataScalarWhereInput | TiltDataScalarWhereInput[]
    OR?: TiltDataScalarWhereInput[]
    NOT?: TiltDataScalarWhereInput | TiltDataScalarWhereInput[]
    id?: StringFilter<"TiltData"> | string
    tiltSensorId?: StringFilter<"TiltData"> | string
    accX?: FloatNullableFilter<"TiltData"> | number | null
    accY?: FloatNullableFilter<"TiltData"> | number | null
    accZ?: FloatNullableFilter<"TiltData"> | number | null
    gyroX?: FloatNullableFilter<"TiltData"> | number | null
    gyroY?: FloatNullableFilter<"TiltData"> | number | null
    gyroZ?: FloatNullableFilter<"TiltData"> | number | null
    magX?: FloatNullableFilter<"TiltData"> | number | null
    magY?: FloatNullableFilter<"TiltData"> | number | null
    magZ?: FloatNullableFilter<"TiltData"> | number | null
    angleX?: FloatNullableFilter<"TiltData"> | number | null
    angleY?: FloatNullableFilter<"TiltData"> | number | null
    angleZ?: FloatNullableFilter<"TiltData"> | number | null
    quat0?: FloatNullableFilter<"TiltData"> | number | null
    quat1?: FloatNullableFilter<"TiltData"> | number | null
    quat2?: FloatNullableFilter<"TiltData"> | number | null
    quat3?: FloatNullableFilter<"TiltData"> | number | null
    createdAt?: DateTimeFilter<"TiltData"> | Date | string
    updatedAt?: DateTimeFilter<"TiltData"> | Date | string
  }

  export type RaspiCreateWithoutRaspiDataInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutRaspiSensorsInput
  }

  export type RaspiUncheckedCreateWithoutRaspiDataInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiCreateOrConnectWithoutRaspiDataInput = {
    where: RaspiWhereUniqueInput
    create: XOR<RaspiCreateWithoutRaspiDataInput, RaspiUncheckedCreateWithoutRaspiDataInput>
  }

  export type RaspiUpsertWithoutRaspiDataInput = {
    update: XOR<RaspiUpdateWithoutRaspiDataInput, RaspiUncheckedUpdateWithoutRaspiDataInput>
    create: XOR<RaspiCreateWithoutRaspiDataInput, RaspiUncheckedCreateWithoutRaspiDataInput>
    where?: RaspiWhereInput
  }

  export type RaspiUpdateToOneWithWhereWithoutRaspiDataInput = {
    where?: RaspiWhereInput
    data: XOR<RaspiUpdateWithoutRaspiDataInput, RaspiUncheckedUpdateWithoutRaspiDataInput>
  }

  export type RaspiUpdateWithoutRaspiDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutRaspiSensorsNestedInput
  }

  export type RaspiUncheckedUpdateWithoutRaspiDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltSensorCreateWithoutTiltDataInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutTiltSensorsInput
  }

  export type TiltSensorUncheckedCreateWithoutTiltDataInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltSensorCreateOrConnectWithoutTiltDataInput = {
    where: TiltSensorWhereUniqueInput
    create: XOR<TiltSensorCreateWithoutTiltDataInput, TiltSensorUncheckedCreateWithoutTiltDataInput>
  }

  export type TiltSensorUpsertWithoutTiltDataInput = {
    update: XOR<TiltSensorUpdateWithoutTiltDataInput, TiltSensorUncheckedUpdateWithoutTiltDataInput>
    create: XOR<TiltSensorCreateWithoutTiltDataInput, TiltSensorUncheckedCreateWithoutTiltDataInput>
    where?: TiltSensorWhereInput
  }

  export type TiltSensorUpdateToOneWithWhereWithoutTiltDataInput = {
    where?: TiltSensorWhereInput
    data: XOR<TiltSensorUpdateWithoutTiltDataInput, TiltSensorUncheckedUpdateWithoutTiltDataInput>
  }

  export type TiltSensorUpdateWithoutTiltDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutTiltSensorsNestedInput
  }

  export type TiltSensorUncheckedUpdateWithoutTiltDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSCreateWithoutBmsDataInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutBmsSensorsInput
  }

  export type BMSUncheckedCreateWithoutBmsDataInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSCreateOrConnectWithoutBmsDataInput = {
    where: BMSWhereUniqueInput
    create: XOR<BMSCreateWithoutBmsDataInput, BMSUncheckedCreateWithoutBmsDataInput>
  }

  export type BMSUpsertWithoutBmsDataInput = {
    update: XOR<BMSUpdateWithoutBmsDataInput, BMSUncheckedUpdateWithoutBmsDataInput>
    create: XOR<BMSCreateWithoutBmsDataInput, BMSUncheckedCreateWithoutBmsDataInput>
    where?: BMSWhereInput
  }

  export type BMSUpdateToOneWithWhereWithoutBmsDataInput = {
    where?: BMSWhereInput
    data: XOR<BMSUpdateWithoutBmsDataInput, BMSUncheckedUpdateWithoutBmsDataInput>
  }

  export type BMSUpdateWithoutBmsDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutBmsSensorsNestedInput
  }

  export type BMSUncheckedUpdateWithoutBmsDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaSensorCreateWithoutMopekaDataInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMopekaSensorsInput
  }

  export type MopekaSensorUncheckedCreateWithoutMopekaDataInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaSensorCreateOrConnectWithoutMopekaDataInput = {
    where: MopekaSensorWhereUniqueInput
    create: XOR<MopekaSensorCreateWithoutMopekaDataInput, MopekaSensorUncheckedCreateWithoutMopekaDataInput>
  }

  export type MopekaSensorUpsertWithoutMopekaDataInput = {
    update: XOR<MopekaSensorUpdateWithoutMopekaDataInput, MopekaSensorUncheckedUpdateWithoutMopekaDataInput>
    create: XOR<MopekaSensorCreateWithoutMopekaDataInput, MopekaSensorUncheckedCreateWithoutMopekaDataInput>
    where?: MopekaSensorWhereInput
  }

  export type MopekaSensorUpdateToOneWithWhereWithoutMopekaDataInput = {
    where?: MopekaSensorWhereInput
    data: XOR<MopekaSensorUpdateWithoutMopekaDataInput, MopekaSensorUncheckedUpdateWithoutMopekaDataInput>
  }

  export type MopekaSensorUpdateWithoutMopekaDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMopekaSensorsNestedInput
  }

  export type MopekaSensorUncheckedUpdateWithoutMopekaDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaSensorCreateManyCreatorInput = {
    id?: string
    name: string
    sensorId: string
    mqttTopic: string
    mediumType: string
    tankSizeGallon: number
    tankSizeInch: number
    threshold: number
    heightOffset: number
    trailerId: string
    calibrationPoints?: MopekaSensorCreatecalibrationPointsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSCreateManyCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    threshold: number
    trailerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiCreateManyCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltSensorCreateManyCreatorInput = {
    id?: string
    name: string
    deviceName: string
    mqttTopic: string
    helicopterId?: string | null
    trailerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaSensorUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaData?: MopekaDataUpdateManyWithoutMopekaSensorNestedInput
  }

  export type MopekaSensorUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mopekaData?: MopekaDataUncheckedUpdateManyWithoutMopekaSensorNestedInput
  }

  export type MopekaSensorUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    mediumType?: StringFieldUpdateOperationsInput | string
    tankSizeGallon?: FloatFieldUpdateOperationsInput | number
    tankSizeInch?: FloatFieldUpdateOperationsInput | number
    threshold?: FloatFieldUpdateOperationsInput | number
    heightOffset?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    calibrationPoints?: MopekaSensorUpdatecalibrationPointsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmsData?: BMSDataUpdateManyWithoutBmsNestedInput
  }

  export type BMSUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmsData?: BMSDataUncheckedUpdateManyWithoutBmsNestedInput
  }

  export type BMSUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    trailerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raspiData?: RaspiDataUpdateManyWithoutRaspiNestedInput
  }

  export type RaspiUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raspiData?: RaspiDataUncheckedUpdateManyWithoutRaspiNestedInput
  }

  export type RaspiUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltSensorUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiltData?: TiltDataUpdateManyWithoutTiltSensorNestedInput
  }

  export type TiltSensorUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiltData?: TiltDataUncheckedUpdateManyWithoutTiltSensorNestedInput
  }

  export type TiltSensorUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    helicopterId?: NullableStringFieldUpdateOperationsInput | string | null
    trailerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaDataCreateManyMopekaSensorInput = {
    id?: string
    rawBattery?: number | null
    batteryVolt?: number | null
    batteryPercent?: number | null
    rawTemp?: number | null
    tempCelsius?: number | null
    tempFahrenheit?: number | null
    readingQuality?: number | null
    tankLevelRaw?: number | null
    tankLevelNonCompensatedMm?: number | null
    tankLevelNonCompensatedIn?: number | null
    tankLevelCompensatedMm?: number | null
    tankLevelCompensatedInch?: number | null
    accelX?: number | null
    accelY?: number | null
    angle?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MopekaDataUpdateWithoutMopekaSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawBattery?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryVolt?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    rawTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    tempCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    tempFahrenheit?: NullableFloatFieldUpdateOperationsInput | number | null
    readingQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelRaw?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedIn?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedInch?: NullableFloatFieldUpdateOperationsInput | number | null
    accelX?: NullableFloatFieldUpdateOperationsInput | number | null
    accelY?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaDataUncheckedUpdateWithoutMopekaSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawBattery?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryVolt?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    rawTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    tempCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    tempFahrenheit?: NullableFloatFieldUpdateOperationsInput | number | null
    readingQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelRaw?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedIn?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedInch?: NullableFloatFieldUpdateOperationsInput | number | null
    accelX?: NullableFloatFieldUpdateOperationsInput | number | null
    accelY?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MopekaDataUncheckedUpdateManyWithoutMopekaSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawBattery?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryVolt?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    rawTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    tempCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    tempFahrenheit?: NullableFloatFieldUpdateOperationsInput | number | null
    readingQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelRaw?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelNonCompensatedIn?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedMm?: NullableFloatFieldUpdateOperationsInput | number | null
    tankLevelCompensatedInch?: NullableFloatFieldUpdateOperationsInput | number | null
    accelX?: NullableFloatFieldUpdateOperationsInput | number | null
    accelY?: NullableFloatFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSDataCreateManyBmsInput = {
    id?: string
    stateOfCharge?: number | null
    totalVoltage?: number | null
    current?: number | null
    power?: number | null
    remainingCapacity?: number | null
    nominalCapacity?: number | null
    chargingCycles?: number | null
    deltaCellVoltage?: number | null
    softwareVersion?: string | null
    errors?: string | null
    balancingActive?: boolean | null
    cell1Voltage?: number | null
    cell2Voltage?: number | null
    cell3Voltage?: number | null
    cell4Voltage?: number | null
    temp1?: number | null
    temp2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BMSDataUpdateWithoutBmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateOfCharge?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    power?: NullableFloatFieldUpdateOperationsInput | number | null
    remainingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    nominalCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    chargingCycles?: NullableIntFieldUpdateOperationsInput | number | null
    deltaCellVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    softwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    balancingActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cell1Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell2Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell3Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell4Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    temp1?: NullableFloatFieldUpdateOperationsInput | number | null
    temp2?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSDataUncheckedUpdateWithoutBmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateOfCharge?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    power?: NullableFloatFieldUpdateOperationsInput | number | null
    remainingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    nominalCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    chargingCycles?: NullableIntFieldUpdateOperationsInput | number | null
    deltaCellVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    softwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    balancingActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cell1Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell2Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell3Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell4Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    temp1?: NullableFloatFieldUpdateOperationsInput | number | null
    temp2?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BMSDataUncheckedUpdateManyWithoutBmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateOfCharge?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    power?: NullableFloatFieldUpdateOperationsInput | number | null
    remainingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    nominalCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    chargingCycles?: NullableIntFieldUpdateOperationsInput | number | null
    deltaCellVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    softwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    balancingActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cell1Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell2Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell3Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    cell4Voltage?: NullableFloatFieldUpdateOperationsInput | number | null
    temp1?: NullableFloatFieldUpdateOperationsInput | number | null
    temp2?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiDataCreateManyRaspiInput = {
    id?: string
    cht1?: number | null
    cht2?: number | null
    cht3?: number | null
    cht4?: number | null
    cht5?: number | null
    cht6?: number | null
    egt1?: number | null
    egt2?: number | null
    egt3?: number | null
    egt4?: number | null
    egt5?: number | null
    egt6?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaspiDataUpdateWithoutRaspiInput = {
    id?: StringFieldUpdateOperationsInput | string
    cht1?: NullableFloatFieldUpdateOperationsInput | number | null
    cht2?: NullableFloatFieldUpdateOperationsInput | number | null
    cht3?: NullableFloatFieldUpdateOperationsInput | number | null
    cht4?: NullableFloatFieldUpdateOperationsInput | number | null
    cht5?: NullableFloatFieldUpdateOperationsInput | number | null
    cht6?: NullableFloatFieldUpdateOperationsInput | number | null
    egt1?: NullableFloatFieldUpdateOperationsInput | number | null
    egt2?: NullableFloatFieldUpdateOperationsInput | number | null
    egt3?: NullableFloatFieldUpdateOperationsInput | number | null
    egt4?: NullableFloatFieldUpdateOperationsInput | number | null
    egt5?: NullableFloatFieldUpdateOperationsInput | number | null
    egt6?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiDataUncheckedUpdateWithoutRaspiInput = {
    id?: StringFieldUpdateOperationsInput | string
    cht1?: NullableFloatFieldUpdateOperationsInput | number | null
    cht2?: NullableFloatFieldUpdateOperationsInput | number | null
    cht3?: NullableFloatFieldUpdateOperationsInput | number | null
    cht4?: NullableFloatFieldUpdateOperationsInput | number | null
    cht5?: NullableFloatFieldUpdateOperationsInput | number | null
    cht6?: NullableFloatFieldUpdateOperationsInput | number | null
    egt1?: NullableFloatFieldUpdateOperationsInput | number | null
    egt2?: NullableFloatFieldUpdateOperationsInput | number | null
    egt3?: NullableFloatFieldUpdateOperationsInput | number | null
    egt4?: NullableFloatFieldUpdateOperationsInput | number | null
    egt5?: NullableFloatFieldUpdateOperationsInput | number | null
    egt6?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaspiDataUncheckedUpdateManyWithoutRaspiInput = {
    id?: StringFieldUpdateOperationsInput | string
    cht1?: NullableFloatFieldUpdateOperationsInput | number | null
    cht2?: NullableFloatFieldUpdateOperationsInput | number | null
    cht3?: NullableFloatFieldUpdateOperationsInput | number | null
    cht4?: NullableFloatFieldUpdateOperationsInput | number | null
    cht5?: NullableFloatFieldUpdateOperationsInput | number | null
    cht6?: NullableFloatFieldUpdateOperationsInput | number | null
    egt1?: NullableFloatFieldUpdateOperationsInput | number | null
    egt2?: NullableFloatFieldUpdateOperationsInput | number | null
    egt3?: NullableFloatFieldUpdateOperationsInput | number | null
    egt4?: NullableFloatFieldUpdateOperationsInput | number | null
    egt5?: NullableFloatFieldUpdateOperationsInput | number | null
    egt6?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltDataCreateManyTiltSensorInput = {
    id?: string
    accX?: number | null
    accY?: number | null
    accZ?: number | null
    gyroX?: number | null
    gyroY?: number | null
    gyroZ?: number | null
    magX?: number | null
    magY?: number | null
    magZ?: number | null
    angleX?: number | null
    angleY?: number | null
    angleZ?: number | null
    quat0?: number | null
    quat1?: number | null
    quat2?: number | null
    quat3?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiltDataUpdateWithoutTiltSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    accX?: NullableFloatFieldUpdateOperationsInput | number | null
    accY?: NullableFloatFieldUpdateOperationsInput | number | null
    accZ?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroX?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroY?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroZ?: NullableFloatFieldUpdateOperationsInput | number | null
    magX?: NullableFloatFieldUpdateOperationsInput | number | null
    magY?: NullableFloatFieldUpdateOperationsInput | number | null
    magZ?: NullableFloatFieldUpdateOperationsInput | number | null
    angleX?: NullableFloatFieldUpdateOperationsInput | number | null
    angleY?: NullableFloatFieldUpdateOperationsInput | number | null
    angleZ?: NullableFloatFieldUpdateOperationsInput | number | null
    quat0?: NullableFloatFieldUpdateOperationsInput | number | null
    quat1?: NullableFloatFieldUpdateOperationsInput | number | null
    quat2?: NullableFloatFieldUpdateOperationsInput | number | null
    quat3?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltDataUncheckedUpdateWithoutTiltSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    accX?: NullableFloatFieldUpdateOperationsInput | number | null
    accY?: NullableFloatFieldUpdateOperationsInput | number | null
    accZ?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroX?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroY?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroZ?: NullableFloatFieldUpdateOperationsInput | number | null
    magX?: NullableFloatFieldUpdateOperationsInput | number | null
    magY?: NullableFloatFieldUpdateOperationsInput | number | null
    magZ?: NullableFloatFieldUpdateOperationsInput | number | null
    angleX?: NullableFloatFieldUpdateOperationsInput | number | null
    angleY?: NullableFloatFieldUpdateOperationsInput | number | null
    angleZ?: NullableFloatFieldUpdateOperationsInput | number | null
    quat0?: NullableFloatFieldUpdateOperationsInput | number | null
    quat1?: NullableFloatFieldUpdateOperationsInput | number | null
    quat2?: NullableFloatFieldUpdateOperationsInput | number | null
    quat3?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiltDataUncheckedUpdateManyWithoutTiltSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    accX?: NullableFloatFieldUpdateOperationsInput | number | null
    accY?: NullableFloatFieldUpdateOperationsInput | number | null
    accZ?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroX?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroY?: NullableFloatFieldUpdateOperationsInput | number | null
    gyroZ?: NullableFloatFieldUpdateOperationsInput | number | null
    magX?: NullableFloatFieldUpdateOperationsInput | number | null
    magY?: NullableFloatFieldUpdateOperationsInput | number | null
    magZ?: NullableFloatFieldUpdateOperationsInput | number | null
    angleX?: NullableFloatFieldUpdateOperationsInput | number | null
    angleY?: NullableFloatFieldUpdateOperationsInput | number | null
    angleZ?: NullableFloatFieldUpdateOperationsInput | number | null
    quat0?: NullableFloatFieldUpdateOperationsInput | number | null
    quat1?: NullableFloatFieldUpdateOperationsInput | number | null
    quat2?: NullableFloatFieldUpdateOperationsInput | number | null
    quat3?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}