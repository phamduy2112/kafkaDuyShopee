
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
 * Model cart_items
 * 
 */
export type cart_items = $Result.DefaultSelection<Prisma.$cart_itemsPayload>
/**
 * Model carts
 * 
 */
export type carts = $Result.DefaultSelection<Prisma.$cartsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model likes
 * 
 */
export type likes = $Result.DefaultSelection<Prisma.$likesPayload>
/**
 * Model media
 * 
 */
export type media = $Result.DefaultSelection<Prisma.$mediaPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cart_items
 * const cart_items = await prisma.cart_items.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cart_items
   * const cart_items = await prisma.cart_items.findMany()
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
   * `prisma.cart_items`: Exposes CRUD operations for the **cart_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_items
    * const cart_items = await prisma.cart_items.findMany()
    * ```
    */
  get cart_items(): Prisma.cart_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.mediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    cart_items: 'cart_items',
    carts: 'carts',
    categories: 'categories',
    comments: 'comments',
    likes: 'likes',
    media: 'media',
    order_items: 'order_items',
    orders: 'orders',
    products: 'products',
    users: 'users'
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
      modelProps: "cart_items" | "carts" | "categories" | "comments" | "likes" | "media" | "order_items" | "orders" | "products" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cart_items: {
        payload: Prisma.$cart_itemsPayload<ExtArgs>
        fields: Prisma.cart_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cart_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cart_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findFirst: {
            args: Prisma.cart_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cart_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findMany: {
            args: Prisma.cart_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          create: {
            args: Prisma.cart_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          createMany: {
            args: Prisma.cart_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cart_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          delete: {
            args: Prisma.cart_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          update: {
            args: Prisma.cart_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          deleteMany: {
            args: Prisma.cart_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cart_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cart_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          upsert: {
            args: Prisma.cart_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          aggregate: {
            args: Prisma.Cart_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_items>
          }
          groupBy: {
            args: Prisma.cart_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cart_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsCountAggregateOutputType> | number
          }
        }
      }
      carts: {
        payload: Prisma.$cartsPayload<ExtArgs>
        fields: Prisma.cartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findFirst: {
            args: Prisma.cartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findMany: {
            args: Prisma.cartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          create: {
            args: Prisma.cartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          createMany: {
            args: Prisma.cartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          delete: {
            args: Prisma.cartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          update: {
            args: Prisma.cartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          deleteMany: {
            args: Prisma.cartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          upsert: {
            args: Prisma.cartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.cartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      likes: {
        payload: Prisma.$likesPayload<ExtArgs>
        fields: Prisma.likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findFirst: {
            args: Prisma.likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findMany: {
            args: Prisma.likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          create: {
            args: Prisma.likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          createMany: {
            args: Prisma.likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          delete: {
            args: Prisma.likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          update: {
            args: Prisma.likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          deleteMany: {
            args: Prisma.likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          upsert: {
            args: Prisma.likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.likesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      media: {
        payload: Prisma.$mediaPayload<ExtArgs>
        fields: Prisma.mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findFirst: {
            args: Prisma.mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findMany: {
            args: Prisma.mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          create: {
            args: Prisma.mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          createMany: {
            args: Prisma.mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          delete: {
            args: Prisma.mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          update: {
            args: Prisma.mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          deleteMany: {
            args: Prisma.mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          upsert: {
            args: Prisma.mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    cart_items?: cart_itemsOmit
    carts?: cartsOmit
    categories?: categoriesOmit
    comments?: commentsOmit
    likes?: likesOmit
    media?: mediaOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    products?: productsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    other_comments: number
    likes: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_comments?: boolean | CommentsCountOutputTypeCountOther_commentsArgs
    likes?: boolean | CommentsCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountOther_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    cart_items: number
    comments: number
    media: number
    order_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | ProductsCountOutputTypeCountCart_itemsArgs
    comments?: boolean | ProductsCountOutputTypeCountCommentsArgs
    media?: boolean | ProductsCountOutputTypeCountMediaArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    carts: number
    comments: number
    likes: number
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UsersCountOutputTypeCountCartsArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cart_items
   */

  export type AggregateCart_items = {
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  export type Cart_itemsAvgAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_itemsSumAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_itemsMinAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_itemsMaxAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_itemsCountAggregateOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    _all: number
  }


  export type Cart_itemsAvgAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_itemsSumAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_itemsMinAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_itemsMaxAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_itemsCountAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    _all?: true
  }

  export type Cart_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to aggregate.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cart_items
    **/
    _count?: true | Cart_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type GetCart_itemsAggregateType<T extends Cart_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_items[P]>
      : GetScalarType<T[P], AggregateCart_items[P]>
  }




  export type cart_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithAggregationInput | cart_itemsOrderByWithAggregationInput[]
    by: Cart_itemsScalarFieldEnum[] | Cart_itemsScalarFieldEnum
    having?: cart_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_itemsCountAggregateInputType | true
    _avg?: Cart_itemsAvgAggregateInputType
    _sum?: Cart_itemsSumAggregateInputType
    _min?: Cart_itemsMinAggregateInputType
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type Cart_itemsGroupByOutputType = {
    id: number
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  type GetCart_itemsGroupByPayload<T extends cart_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
        }
      >
    >


  export type cart_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectScalar = {
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
  }

  export type cart_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "product_id" | "quantity", ExtArgs["result"]["cart_items"]>
  export type cart_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
  }
  export type cart_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
  }
  export type cart_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
  }

  export type $cart_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart_items"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs> | null
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cart_id: number | null
      product_id: number | null
      quantity: number | null
    }, ExtArgs["result"]["cart_items"]>
    composites: {}
  }

  type cart_itemsGetPayload<S extends boolean | null | undefined | cart_itemsDefaultArgs> = $Result.GetResult<Prisma.$cart_itemsPayload, S>

  type cart_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cart_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_itemsCountAggregateInputType | true
    }

  export interface cart_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart_items'], meta: { name: 'cart_items' } }
    /**
     * Find zero or one Cart_items that matches the filter.
     * @param {cart_itemsFindUniqueArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cart_itemsFindUniqueArgs>(args: SelectSubset<T, cart_itemsFindUniqueArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cart_itemsFindUniqueOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cart_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, cart_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cart_itemsFindFirstArgs>(args?: SelectSubset<T, cart_itemsFindFirstArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cart_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, cart_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_items
     * const cart_items = await prisma.cart_items.findMany()
     * 
     * // Get first 10 Cart_items
     * const cart_items = await prisma.cart_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cart_itemsFindManyArgs>(args?: SelectSubset<T, cart_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_items.
     * @param {cart_itemsCreateArgs} args - Arguments to create a Cart_items.
     * @example
     * // Create one Cart_items
     * const Cart_items = await prisma.cart_items.create({
     *   data: {
     *     // ... data to create a Cart_items
     *   }
     * })
     * 
     */
    create<T extends cart_itemsCreateArgs>(args: SelectSubset<T, cart_itemsCreateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_items.
     * @param {cart_itemsCreateManyArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cart_itemsCreateManyArgs>(args?: SelectSubset<T, cart_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cart_items and returns the data saved in the database.
     * @param {cart_itemsCreateManyAndReturnArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cart_items and only return the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cart_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, cart_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart_items.
     * @param {cart_itemsDeleteArgs} args - Arguments to delete one Cart_items.
     * @example
     * // Delete one Cart_items
     * const Cart_items = await prisma.cart_items.delete({
     *   where: {
     *     // ... filter to delete one Cart_items
     *   }
     * })
     * 
     */
    delete<T extends cart_itemsDeleteArgs>(args: SelectSubset<T, cart_itemsDeleteArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_items.
     * @param {cart_itemsUpdateArgs} args - Arguments to update one Cart_items.
     * @example
     * // Update one Cart_items
     * const cart_items = await prisma.cart_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cart_itemsUpdateArgs>(args: SelectSubset<T, cart_itemsUpdateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_items.
     * @param {cart_itemsDeleteManyArgs} args - Arguments to filter Cart_items to delete.
     * @example
     * // Delete a few Cart_items
     * const { count } = await prisma.cart_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cart_itemsDeleteManyArgs>(args?: SelectSubset<T, cart_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cart_itemsUpdateManyArgs>(args: SelectSubset<T, cart_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items and returns the data updated in the database.
     * @param {cart_itemsUpdateManyAndReturnArgs} args - Arguments to update many Cart_items.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cart_items and only return the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends cart_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, cart_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart_items.
     * @param {cart_itemsUpsertArgs} args - Arguments to update or create a Cart_items.
     * @example
     * // Update or create a Cart_items
     * const cart_items = await prisma.cart_items.upsert({
     *   create: {
     *     // ... data to create a Cart_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_items we want to update
     *   }
     * })
     */
    upsert<T extends cart_itemsUpsertArgs>(args: SelectSubset<T, cart_itemsUpsertArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsCountArgs} args - Arguments to filter Cart_items to count.
     * @example
     * // Count the number of Cart_items
     * const count = await prisma.cart_items.count({
     *   where: {
     *     // ... the filter for the Cart_items we want to count
     *   }
     * })
    **/
    count<T extends cart_itemsCountArgs>(
      args?: Subset<T, cart_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cart_itemsAggregateArgs>(args: Subset<T, Cart_itemsAggregateArgs>): Prisma.PrismaPromise<GetCart_itemsAggregateType<T>>

    /**
     * Group by Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsGroupByArgs} args - Group by arguments.
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
      T extends cart_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cart_itemsGroupByArgs['orderBy'] }
        : { orderBy?: cart_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cart_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart_items model
   */
  readonly fields: cart_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cart_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends cart_items$cartsArgs<ExtArgs> = {}>(args?: Subset<T, cart_items$cartsArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends cart_items$productsArgs<ExtArgs> = {}>(args?: Subset<T, cart_items$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cart_items model
   */
  interface cart_itemsFieldRefs {
    readonly id: FieldRef<"cart_items", 'Int'>
    readonly cart_id: FieldRef<"cart_items", 'Int'>
    readonly product_id: FieldRef<"cart_items", 'Int'>
    readonly quantity: FieldRef<"cart_items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cart_items findUnique
   */
  export type cart_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findUniqueOrThrow
   */
  export type cart_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findFirst
   */
  export type cart_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findFirstOrThrow
   */
  export type cart_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findMany
   */
  export type cart_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items create
   */
  export type cart_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a cart_items.
     */
    data?: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
  }

  /**
   * cart_items createMany
   */
  export type cart_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart_items createManyAndReturn
   */
  export type cart_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items update
   */
  export type cart_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a cart_items.
     */
    data: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
    /**
     * Choose, which cart_items to update.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items updateMany
   */
  export type cart_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
  }

  /**
   * cart_items updateManyAndReturn
   */
  export type cart_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items upsert
   */
  export type cart_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the cart_items to update in case it exists.
     */
    where: cart_itemsWhereUniqueInput
    /**
     * In case the cart_items found by the `where` argument doesn't exist, create a new cart_items with this data.
     */
    create: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
    /**
     * In case the cart_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
  }

  /**
   * cart_items delete
   */
  export type cart_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter which cart_items to delete.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items deleteMany
   */
  export type cart_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to delete
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to delete.
     */
    limit?: number
  }

  /**
   * cart_items.carts
   */
  export type cart_items$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
  }

  /**
   * cart_items.products
   */
  export type cart_items$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * cart_items without action
   */
  export type cart_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
  }


  /**
   * Model carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type cartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithAggregationInput | cartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: number
    user_id: number | null
    created_at: Date | null
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    users?: boolean | carts$usersArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    users?: boolean | carts$usersArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    users?: boolean | carts$usersArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectScalar = {
    id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type cartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "created_at", ExtArgs["result"]["carts"]>
  export type cartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    users?: boolean | carts$usersArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | carts$usersArgs<ExtArgs>
  }
  export type cartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | carts$usersArgs<ExtArgs>
  }

  export type $cartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carts"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = $Result.GetResult<Prisma.$cartsPayload, S>

  type cartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carts'], meta: { name: 'carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartsFindUniqueArgs>(args: SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartsFindFirstArgs>(args?: SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartsFindManyArgs>(args?: SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends cartsCreateArgs>(args: SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartsCreateManyArgs>(args?: SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartsCreateManyAndReturnArgs>(args?: SelectSubset<T, cartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends cartsDeleteArgs>(args: SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartsUpdateArgs>(args: SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartsDeleteManyArgs>(args?: SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartsUpdateManyArgs>(args: SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
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
    updateManyAndReturn<T extends cartsUpdateManyAndReturnArgs>(args: SelectSubset<T, cartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends cartsUpsertArgs>(args: SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsGroupByArgs} args - Group by arguments.
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
      T extends cartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartsGroupByArgs['orderBy'] }
        : { orderBy?: cartsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carts model
   */
  readonly fields: cartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends carts$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends carts$usersArgs<ExtArgs> = {}>(args?: Subset<T, carts$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the carts model
   */
  interface cartsFieldRefs {
    readonly id: FieldRef<"carts", 'Int'>
    readonly user_id: FieldRef<"carts", 'Int'>
    readonly created_at: FieldRef<"carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carts findUnique
   */
  export type cartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findFirst
   */
  export type cartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findMany
   */
  export type cartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts create
   */
  export type cartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to create a carts.
     */
    data?: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }

  /**
   * carts createMany
   */
  export type cartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carts createManyAndReturn
   */
  export type cartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts update
   */
  export type cartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * carts updateManyAndReturn
   */
  export type cartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts upsert
   */
  export type cartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }

  /**
   * carts delete
   */
  export type cartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * carts.cart_items
   */
  export type carts$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * carts.users
   */
  export type carts$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * carts without action
   */
  export type cartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    parent_comment_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    parent_comment_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    content: string | null
    parent_comment_id: number | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    content: string | null
    parent_comment_id: number | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    user_id: number
    product_id: number
    content: number
    parent_comment_id: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    parent_comment_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    parent_comment_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    content?: true
    parent_comment_id?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    content?: true
    parent_comment_id?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    content?: true
    parent_comment_id?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    user_id: number | null
    product_id: number | null
    content: string | null
    parent_comment_id: number | null
    created_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    content?: boolean
    parent_comment_id?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    products?: boolean | comments$productsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
    likes?: boolean | comments$likesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    content?: boolean
    parent_comment_id?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    products?: boolean | comments$productsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    content?: boolean
    parent_comment_id?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    products?: boolean | comments$productsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    content?: boolean
    parent_comment_id?: boolean
    created_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "product_id" | "content" | "parent_comment_id" | "created_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    products?: boolean | comments$productsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
    likes?: boolean | comments$likesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    products?: boolean | comments$productsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    products?: boolean | comments$productsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs> | null
      other_comments: Prisma.$commentsPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      likes: Prisma.$likesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      product_id: number | null
      content: string | null
      parent_comment_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
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
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends comments$commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$commentsArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_comments<T extends comments$other_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$other_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends comments$productsArgs<ExtArgs> = {}>(args?: Subset<T, comments$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    likes<T extends comments$likesArgs<ExtArgs> = {}>(args?: Subset<T, comments$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly user_id: FieldRef<"comments", 'Int'>
    readonly product_id: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly parent_comment_id: FieldRef<"comments", 'Int'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data?: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.comments
   */
  export type comments$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }

  /**
   * comments.other_comments
   */
  export type comments$other_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments.products
   */
  export type comments$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * comments.users
   */
  export type comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * comments.likes
   */
  export type comments$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    comment_id: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    comment_id: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    comment_id: number | null
    created_at: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    comment_id: number | null
    created_at: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    user_id: number
    comment_id: number
    created_at: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
    user_id?: true
    comment_id?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
    user_id?: true
    comment_id?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    user_id?: true
    comment_id?: true
    created_at?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    user_id?: true
    comment_id?: true
    created_at?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    user_id?: true
    comment_id?: true
    created_at?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to aggregate.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
    orderBy?: likesOrderByWithAggregationInput | likesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: number
    user_id: number | null
    comment_id: number | null
    created_at: Date | null
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    comment_id?: boolean
    created_at?: boolean
    comments?: boolean | likes$commentsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    comment_id?: boolean
    created_at?: boolean
    comments?: boolean | likes$commentsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    comment_id?: boolean
    created_at?: boolean
    comments?: boolean | likes$commentsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectScalar = {
    id?: boolean
    user_id?: boolean
    comment_id?: boolean
    created_at?: boolean
  }

  export type likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "comment_id" | "created_at", ExtArgs["result"]["likes"]>
  export type likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | likes$commentsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }
  export type likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | likes$commentsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }
  export type likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | likes$commentsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }

  export type $likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likes"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      comment_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type likesGetPayload<S extends boolean | null | undefined | likesDefaultArgs> = $Result.GetResult<Prisma.$likesPayload, S>

  type likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likes'], meta: { name: 'likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {likesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likesFindUniqueArgs>(args: SelectSubset<T, likesFindUniqueArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likesFindUniqueOrThrowArgs>(args: SelectSubset<T, likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likesFindFirstArgs>(args?: SelectSubset<T, likesFindFirstArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likesFindFirstOrThrowArgs>(args?: SelectSubset<T, likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends likesFindManyArgs>(args?: SelectSubset<T, likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {likesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends likesCreateArgs>(args: SelectSubset<T, likesCreateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likesCreateManyArgs>(args?: SelectSubset<T, likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {likesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends likesCreateManyAndReturnArgs>(args?: SelectSubset<T, likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {likesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends likesDeleteArgs>(args: SelectSubset<T, likesDeleteArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {likesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likesUpdateArgs>(args: SelectSubset<T, likesUpdateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likesDeleteManyArgs>(args?: SelectSubset<T, likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likesUpdateManyArgs>(args: SelectSubset<T, likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {likesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
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
    updateManyAndReturn<T extends likesUpdateManyAndReturnArgs>(args: SelectSubset<T, likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {likesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends likesUpsertArgs>(args: SelectSubset<T, likesUpsertArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likesCountArgs>(
      args?: Subset<T, likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesGroupByArgs} args - Group by arguments.
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
      T extends likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likesGroupByArgs['orderBy'] }
        : { orderBy?: likesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likes model
   */
  readonly fields: likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends likes$commentsArgs<ExtArgs> = {}>(args?: Subset<T, likes$commentsArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends likes$usersArgs<ExtArgs> = {}>(args?: Subset<T, likes$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the likes model
   */
  interface likesFieldRefs {
    readonly id: FieldRef<"likes", 'Int'>
    readonly user_id: FieldRef<"likes", 'Int'>
    readonly comment_id: FieldRef<"likes", 'Int'>
    readonly created_at: FieldRef<"likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * likes findUnique
   */
  export type likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findUniqueOrThrow
   */
  export type likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findFirst
   */
  export type likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findFirstOrThrow
   */
  export type likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findMany
   */
  export type likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes create
   */
  export type likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to create a likes.
     */
    data?: XOR<likesCreateInput, likesUncheckedCreateInput>
  }

  /**
   * likes createMany
   */
  export type likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * likes createManyAndReturn
   */
  export type likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes update
   */
  export type likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to update a likes.
     */
    data: XOR<likesUpdateInput, likesUncheckedUpdateInput>
    /**
     * Choose, which likes to update.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes updateMany
   */
  export type likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * likes updateManyAndReturn
   */
  export type likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes upsert
   */
  export type likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The filter to search for the likes to update in case it exists.
     */
    where: likesWhereUniqueInput
    /**
     * In case the likes found by the `where` argument doesn't exist, create a new likes with this data.
     */
    create: XOR<likesCreateInput, likesUncheckedCreateInput>
    /**
     * In case the likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likesUpdateInput, likesUncheckedUpdateInput>
  }

  /**
   * likes delete
   */
  export type likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter which likes to delete.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes deleteMany
   */
  export type likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * likes.comments
   */
  export type likes$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }

  /**
   * likes.users
   */
  export type likes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * likes without action
   */
  export type likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
  }


  /**
   * Model media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    url: string | null
    type: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    url: string | null
    type: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    product_id: number
    url: number
    type: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    type?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    type?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    type?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to aggregate.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithAggregationInput | mediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    product_id: number | null
    url: string
    type: string | null
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    type?: boolean
    products?: boolean | media$productsArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type mediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    type?: boolean
    products?: boolean | media$productsArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type mediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    type?: boolean
    products?: boolean | media$productsArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type mediaSelectScalar = {
    id?: boolean
    product_id?: boolean
    url?: boolean
    type?: boolean
  }

  export type mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "url" | "type", ExtArgs["result"]["media"]>
  export type mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | media$productsArgs<ExtArgs>
  }
  export type mediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | media$productsArgs<ExtArgs>
  }
  export type mediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | media$productsArgs<ExtArgs>
  }

  export type $mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media"
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number | null
      url: string
      type: string | null
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type mediaGetPayload<S extends boolean | null | undefined | mediaDefaultArgs> = $Result.GetResult<Prisma.$mediaPayload, S>

  type mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media'], meta: { name: 'media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {mediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaFindUniqueArgs>(args: SelectSubset<T, mediaFindUniqueArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaFindFirstArgs>(args?: SelectSubset<T, mediaFindFirstArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mediaFindManyArgs>(args?: SelectSubset<T, mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {mediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends mediaCreateArgs>(args: SelectSubset<T, mediaCreateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {mediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediaCreateManyArgs>(args?: SelectSubset<T, mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {mediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mediaCreateManyAndReturnArgs>(args?: SelectSubset<T, mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {mediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends mediaDeleteArgs>(args: SelectSubset<T, mediaDeleteArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {mediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaUpdateArgs>(args: SelectSubset<T, mediaUpdateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {mediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaDeleteManyArgs>(args?: SelectSubset<T, mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaUpdateManyArgs>(args: SelectSubset<T, mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {mediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
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
    updateManyAndReturn<T extends mediaUpdateManyAndReturnArgs>(args: SelectSubset<T, mediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {mediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends mediaUpsertArgs>(args: SelectSubset<T, mediaUpsertArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends mediaCountArgs>(
      args?: Subset<T, mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaGroupByArgs} args - Group by arguments.
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
      T extends mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaGroupByArgs['orderBy'] }
        : { orderBy?: mediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media model
   */
  readonly fields: mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends media$productsArgs<ExtArgs> = {}>(args?: Subset<T, media$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the media model
   */
  interface mediaFieldRefs {
    readonly id: FieldRef<"media", 'Int'>
    readonly product_id: FieldRef<"media", 'Int'>
    readonly url: FieldRef<"media", 'String'>
    readonly type: FieldRef<"media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * media findUnique
   */
  export type mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findUniqueOrThrow
   */
  export type mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findFirst
   */
  export type mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findFirstOrThrow
   */
  export type mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findMany
   */
  export type mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media create
   */
  export type mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a media.
     */
    data: XOR<mediaCreateInput, mediaUncheckedCreateInput>
  }

  /**
   * media createMany
   */
  export type mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * media createManyAndReturn
   */
  export type mediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * media update
   */
  export type mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a media.
     */
    data: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
    /**
     * Choose, which media to update.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media updateMany
   */
  export type mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
  }

  /**
   * media updateManyAndReturn
   */
  export type mediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * media upsert
   */
  export type mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the media to update in case it exists.
     */
    where: mediaWhereUniqueInput
    /**
     * In case the media found by the `where` argument doesn't exist, create a new media with this data.
     */
    create: XOR<mediaCreateInput, mediaUncheckedCreateInput>
    /**
     * In case the media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
  }

  /**
   * media delete
   */
  export type mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter which media to delete.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media deleteMany
   */
  export type mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to delete
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to delete.
     */
    limit?: number
  }

  /**
   * media.products
   */
  export type media$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * media without action
   */
  export type mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "price", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }
  export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }
  export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number | null
      product_id: number | null
      quantity: number | null
      price: Prisma.Decimal | null
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemsCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemsUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
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
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends order_items$ordersArgs<ExtArgs> = {}>(args?: Subset<T, order_items$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends order_items$productsArgs<ExtArgs> = {}>(args?: Subset<T, order_items$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly order_id: FieldRef<"order_items", 'Int'>
    readonly product_id: FieldRef<"order_items", 'Int'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly price: FieldRef<"order_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data?: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items createManyAndReturn
   */
  export type order_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items updateManyAndReturn
   */
  export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items.orders
   */
  export type order_items$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * order_items.products
   */
  export type order_items$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    total_amount: number
    status: number
    created_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
    status?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
    status?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number | null
    total_amount: Decimal | null
    status: string | null
    created_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    total_amount?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "total_amount" | "status" | "created_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | orders$usersArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | orders$usersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      total_amount: Prisma.Decimal | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
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
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly user_id: FieldRef<"orders", 'Int'>
    readonly total_amount: FieldRef<"orders", 'Decimal'>
    readonly status: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quantity: number | null
    category_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quantity: number | null
    category_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    quantity: number | null
    category_id: number | null
    created_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    quantity: number | null
    category_id: number | null
    created_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    quantity: number
    category_id: number
    created_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    category_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    category_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    category_id?: true
    created_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    category_id?: true
    created_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    category_id?: true
    created_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    price: Decimal | null
    quantity: number | null
    category_id: number | null
    created_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    category_id?: boolean
    created_at?: boolean
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    comments?: boolean | products$commentsArgs<ExtArgs>
    media?: boolean | products$mediaArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    category_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    category_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    category_id?: boolean
    created_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "quantity" | "category_id" | "created_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    comments?: boolean | products$commentsArgs<ExtArgs>
    media?: boolean | products$mediaArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      media: Prisma.$mediaPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      price: Prisma.Decimal | null
      quantity: number | null
      category_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends products$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends products$commentsArgs<ExtArgs> = {}>(args?: Subset<T, products$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends products$mediaArgs<ExtArgs> = {}>(args?: Subset<T, products$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly quantity: FieldRef<"products", 'Int'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly created_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data?: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.cart_items
   */
  export type products$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * products.comments
   */
  export type products$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * products.media
   */
  export type products$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    cursor?: mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    address: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    carts?: boolean | users$cartsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "address" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | users$cartsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      password: string | null
      phone: string | null
      address: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends users$cartsArgs<ExtArgs> = {}>(args?: Subset<T, users$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends users$likesArgs<ExtArgs> = {}>(args?: Subset<T, users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.carts
   */
  export type users$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    cursor?: cartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.likes
   */
  export type users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Cart_itemsScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity'
  };

  export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    product_id: 'product_id',
    content: 'content',
    parent_comment_id: 'parent_comment_id',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    comment_id: 'comment_id',
    created_at: 'created_at'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    url: 'url',
    type: 'type'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total_amount: 'total_amount',
    status: 'status',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    category_id: 'category_id',
    created_at: 'created_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cart_itemsWhereInput = {
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    id?: IntFilter<"cart_items"> | number
    cart_id?: IntNullableFilter<"cart_items"> | number | null
    product_id?: IntNullableFilter<"cart_items"> | number | null
    quantity?: IntNullableFilter<"cart_items"> | number | null
    carts?: XOR<CartsNullableScalarRelationFilter, cartsWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type cart_itemsOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    carts?: cartsOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type cart_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    cart_id?: IntNullableFilter<"cart_items"> | number | null
    product_id?: IntNullableFilter<"cart_items"> | number | null
    quantity?: IntNullableFilter<"cart_items"> | number | null
    carts?: XOR<CartsNullableScalarRelationFilter, cartsWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type cart_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    _count?: cart_itemsCountOrderByAggregateInput
    _avg?: cart_itemsAvgOrderByAggregateInput
    _max?: cart_itemsMaxOrderByAggregateInput
    _min?: cart_itemsMinOrderByAggregateInput
    _sum?: cart_itemsSumOrderByAggregateInput
  }

  export type cart_itemsScalarWhereWithAggregatesInput = {
    AND?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    OR?: cart_itemsScalarWhereWithAggregatesInput[]
    NOT?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart_items"> | number
    cart_id?: IntNullableWithAggregatesFilter<"cart_items"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"cart_items"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"cart_items"> | number | null
  }

  export type cartsWhereInput = {
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    id?: IntFilter<"carts"> | number
    user_id?: IntNullableFilter<"carts"> | number | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type cartsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type cartsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    user_id?: IntNullableFilter<"carts"> | number | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type cartsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: cartsCountOrderByAggregateInput
    _avg?: cartsAvgOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
    _sum?: cartsSumOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    OR?: cartsScalarWhereWithAggregatesInput[]
    NOT?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carts"> | number
    user_id?: IntNullableWithAggregatesFilter<"carts"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    product_id?: IntNullableFilter<"comments"> | number | null
    content?: StringNullableFilter<"comments"> | string | null
    parent_comment_id?: IntNullableFilter<"comments"> | number | null
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    likes?: LikesListRelationFilter
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    comments?: commentsOrderByWithRelationInput
    other_comments?: commentsOrderByRelationAggregateInput
    products?: productsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    likes?: likesOrderByRelationAggregateInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    user_id?: IntNullableFilter<"comments"> | number | null
    product_id?: IntNullableFilter<"comments"> | number | null
    content?: StringNullableFilter<"comments"> | string | null
    parent_comment_id?: IntNullableFilter<"comments"> | number | null
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    likes?: LikesListRelationFilter
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    user_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    content?: StringNullableWithAggregatesFilter<"comments"> | string | null
    parent_comment_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type likesWhereInput = {
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    id?: IntFilter<"likes"> | number
    user_id?: IntNullableFilter<"likes"> | number | null
    comment_id?: IntNullableFilter<"likes"> | number | null
    created_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type likesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    comments?: commentsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type likesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    user_id?: IntNullableFilter<"likes"> | number | null
    comment_id?: IntNullableFilter<"likes"> | number | null
    created_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type likesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: likesCountOrderByAggregateInput
    _avg?: likesAvgOrderByAggregateInput
    _max?: likesMaxOrderByAggregateInput
    _min?: likesMinOrderByAggregateInput
    _sum?: likesSumOrderByAggregateInput
  }

  export type likesScalarWhereWithAggregatesInput = {
    AND?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    OR?: likesScalarWhereWithAggregatesInput[]
    NOT?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"likes"> | number
    user_id?: IntNullableWithAggregatesFilter<"likes"> | number | null
    comment_id?: IntNullableWithAggregatesFilter<"likes"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"likes"> | Date | string | null
  }

  export type mediaWhereInput = {
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    id?: IntFilter<"media"> | number
    product_id?: IntNullableFilter<"media"> | number | null
    url?: StringFilter<"media"> | string
    type?: StringNullableFilter<"media"> | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type mediaOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    product_id?: IntNullableFilter<"media"> | number | null
    url?: StringFilter<"media"> | string
    type?: StringNullableFilter<"media"> | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type mediaOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    _count?: mediaCountOrderByAggregateInput
    _avg?: mediaAvgOrderByAggregateInput
    _max?: mediaMaxOrderByAggregateInput
    _min?: mediaMinOrderByAggregateInput
    _sum?: mediaSumOrderByAggregateInput
  }

  export type mediaScalarWhereWithAggregatesInput = {
    AND?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    OR?: mediaScalarWhereWithAggregatesInput[]
    NOT?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"media"> | number
    product_id?: IntNullableWithAggregatesFilter<"media"> | number | null
    url?: StringWithAggregatesFilter<"media"> | string
    type?: StringNullableWithAggregatesFilter<"media"> | string | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    quantity?: IntNullableFilter<"order_items"> | number | null
    price?: DecimalNullableFilter<"order_items"> | Decimal | DecimalJsLike | number | string | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    quantity?: IntNullableFilter<"order_items"> | number | null
    price?: DecimalNullableFilter<"order_items"> | Decimal | DecimalJsLike | number | string | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    order_id?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    price?: DecimalNullableWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    total_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: IntNullableFilter<"orders"> | number | null
    total_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    user_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    total_amount?: DecimalNullableWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"orders"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"products"> | number | null
    category_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    comments?: CommentsListRelationFilter
    media?: MediaListRelationFilter
    order_items?: Order_itemsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    media?: mediaOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"products"> | number | null
    category_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    comments?: CommentsListRelationFilter
    media?: MediaListRelationFilter
    order_items?: Order_itemsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringNullableWithAggregatesFilter<"products"> | string | null
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableWithAggregatesFilter<"products"> | number | null
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    carts?: CartsListRelationFilter
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    carts?: cartsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    carts?: CartsListRelationFilter
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type cart_itemsCreateInput = {
    quantity?: number | null
    carts?: cartsCreateNestedOneWithoutCart_itemsInput
    products?: productsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateInput = {
    id?: number
    cart_id?: number | null
    product_id?: number | null
    quantity?: number | null
  }

  export type cart_itemsUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    carts?: cartsUpdateOneWithoutCart_itemsNestedInput
    products?: productsUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cart_itemsCreateManyInput = {
    id?: number
    cart_id?: number | null
    product_id?: number | null
    quantity?: number | null
  }

  export type cart_itemsUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cart_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cartsCreateInput = {
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutCartsInput
    users?: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutCartsNestedInput
    users?: usersUpdateOneWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type cartsCreateManyInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
  }

  export type cartsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name: string
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type commentsCreateInput = {
    content?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    products?: productsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
    likes?: likesCreateNestedManyWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    product_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
    likes?: likesUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    products?: productsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
    likes?: likesUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
    likes?: likesUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsCreateManyInput = {
    id?: number
    user_id?: number | null
    product_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesCreateInput = {
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutLikesInput
    users?: usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    comment_id?: number | null
    created_at?: Date | string | null
  }

  export type likesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutLikesNestedInput
    users?: usersUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesCreateManyInput = {
    id?: number
    user_id?: number | null
    comment_id?: number | null
    created_at?: Date | string | null
  }

  export type likesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaCreateInput = {
    url: string
    type?: string | null
    products?: productsCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateInput = {
    id?: number
    product_id?: number | null
    url: string
    type?: string | null
  }

  export type mediaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateOneWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mediaCreateManyInput = {
    id?: number
    product_id?: number | null
    url: string
    type?: string | null
  }

  export type mediaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateInput = {
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    orders?: ordersCreateNestedOneWithoutOrder_itemsInput
    products?: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orders?: ordersUpdateOneWithoutOrder_itemsNestedInput
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsCreateManyInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ordersCreateInput = {
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    user_id?: number | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    comments?: commentsCreateNestedManyWithoutProductsInput
    media?: mediaCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    comments?: commentsUncheckedCreateNestedManyWithoutProductsInput
    media?: mediaUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    comments?: commentsUpdateManyWithoutProductsNestedInput
    media?: mediaUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutProductsNestedInput
    media?: mediaUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type CartsNullableScalarRelationFilter = {
    is?: cartsWhereInput | null
    isNot?: cartsWhereInput | null
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null
    isNot?: productsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cart_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type cart_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type cart_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type cart_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type cart_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Cart_itemsListRelationFilter = {
    every?: cart_itemsWhereInput
    some?: cart_itemsWhereInput
    none?: cart_itemsWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type cart_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type cartsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type cartsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CommentsNullableScalarRelationFilter = {
    is?: commentsWhereInput | null
    isNot?: commentsWhereInput | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: likesWhereInput
    some?: likesWhereInput
    none?: likesWhereInput
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    content?: SortOrder
    parent_comment_id?: SortOrder
    created_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    parent_comment_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    content?: SortOrder
    parent_comment_id?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    content?: SortOrder
    parent_comment_id?: SortOrder
    created_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    parent_comment_id?: SortOrder
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

  export type likesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    comment_id?: SortOrder
    created_at?: SortOrder
  }

  export type likesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    comment_id?: SortOrder
  }

  export type likesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    comment_id?: SortOrder
    created_at?: SortOrder
  }

  export type likesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    comment_id?: SortOrder
    created_at?: SortOrder
  }

  export type likesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    comment_id?: SortOrder
  }

  export type mediaCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
  }

  export type mediaAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type mediaMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
  }

  export type mediaMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
  }

  export type mediaSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
  }

  export type MediaListRelationFilter = {
    every?: mediaWhereInput
    some?: mediaWhereInput
    none?: mediaWhereInput
  }

  export type mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
  }

  export type CartsListRelationFilter = {
    every?: cartsWhereInput
    some?: cartsWhereInput
    none?: cartsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type cartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cartsUpdateOneWithoutCart_itemsNestedInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    upsert?: cartsUpsertWithoutCart_itemsInput
    disconnect?: cartsWhereInput | boolean
    delete?: cartsWhereInput | boolean
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutCart_itemsInput, cartsUpdateWithoutCart_itemsInput>, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateOneWithoutCart_itemsNestedInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    upsert?: productsUpsertWithoutCart_itemsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCart_itemsInput, productsUpdateWithoutCart_itemsInput>, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cart_itemsCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCartsInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    connect?: usersWhereUniqueInput
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cart_itemsUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartsInput | cart_itemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartsInput | cart_itemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartsInput | cart_itemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutCartsNestedInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    upsert?: usersUpsertWithoutCartsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCartsInput, usersUpdateWithoutCartsInput>, usersUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartsInput | cart_itemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartsInput | cart_itemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartsInput | cart_itemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type commentsCreateNestedOneWithoutOther_commentsInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type productsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<productsCreateWithoutCommentsInput, productsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCommentsInput
    connect?: productsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type likesCreateNestedManyWithoutCommentsInput = {
    create?: XOR<likesCreateWithoutCommentsInput, likesUncheckedCreateWithoutCommentsInput> | likesCreateWithoutCommentsInput[] | likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutCommentsInput | likesCreateOrConnectWithoutCommentsInput[]
    createMany?: likesCreateManyCommentsInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<likesCreateWithoutCommentsInput, likesUncheckedCreateWithoutCommentsInput> | likesCreateWithoutCommentsInput[] | likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutCommentsInput | likesCreateOrConnectWithoutCommentsInput[]
    createMany?: likesCreateManyCommentsInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type commentsUpdateOneWithoutOther_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    upsert?: commentsUpsertWithoutOther_commentsInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutOther_commentsInput, commentsUpdateWithoutOther_commentsInput>, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type productsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<productsCreateWithoutCommentsInput, productsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCommentsInput
    upsert?: productsUpsertWithoutCommentsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCommentsInput, productsUpdateWithoutCommentsInput>, productsUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type likesUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<likesCreateWithoutCommentsInput, likesUncheckedCreateWithoutCommentsInput> | likesCreateWithoutCommentsInput[] | likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutCommentsInput | likesCreateOrConnectWithoutCommentsInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutCommentsInput | likesUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: likesCreateManyCommentsInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutCommentsInput | likesUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: likesUpdateManyWithWhereWithoutCommentsInput | likesUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<likesCreateWithoutCommentsInput, likesUncheckedCreateWithoutCommentsInput> | likesCreateWithoutCommentsInput[] | likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutCommentsInput | likesCreateOrConnectWithoutCommentsInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutCommentsInput | likesUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: likesCreateManyCommentsInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutCommentsInput | likesUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: likesUpdateManyWithWhereWithoutCommentsInput | likesUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type commentsCreateNestedOneWithoutLikesInput = {
    create?: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutLikesInput
    connect?: commentsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutLikesInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUpdateOneWithoutLikesNestedInput = {
    create?: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutLikesInput
    upsert?: commentsUpsertWithoutLikesInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutLikesInput, commentsUpdateWithoutLikesInput>, commentsUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateOneWithoutLikesNestedInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    upsert?: usersUpsertWithoutLikesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLikesInput, usersUpdateWithoutLikesInput>, usersUncheckedUpdateWithoutLikesInput>
  }

  export type productsCreateNestedOneWithoutMediaInput = {
    create?: XOR<productsCreateWithoutMediaInput, productsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: productsCreateOrConnectWithoutMediaInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneWithoutMediaNestedInput = {
    create?: XOR<productsCreateWithoutMediaInput, productsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: productsCreateOrConnectWithoutMediaInput
    upsert?: productsUpsertWithoutMediaInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutMediaInput, productsUpdateWithoutMediaInput>, productsUncheckedUpdateWithoutMediaInput>
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ordersUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type cart_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutProductsInput = {
    create?: XOR<commentsCreateWithoutProductsInput, commentsUncheckedCreateWithoutProductsInput> | commentsCreateWithoutProductsInput[] | commentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProductsInput | commentsCreateOrConnectWithoutProductsInput[]
    createMany?: commentsCreateManyProductsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type mediaCreateNestedManyWithoutProductsInput = {
    create?: XOR<mediaCreateWithoutProductsInput, mediaUncheckedCreateWithoutProductsInput> | mediaCreateWithoutProductsInput[] | mediaUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutProductsInput | mediaCreateOrConnectWithoutProductsInput[]
    createMany?: mediaCreateManyProductsInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<commentsCreateWithoutProductsInput, commentsUncheckedCreateWithoutProductsInput> | commentsCreateWithoutProductsInput[] | commentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProductsInput | commentsCreateOrConnectWithoutProductsInput[]
    createMany?: commentsCreateManyProductsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type mediaUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<mediaCreateWithoutProductsInput, mediaUncheckedCreateWithoutProductsInput> | mediaCreateWithoutProductsInput[] | mediaUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutProductsInput | mediaCreateOrConnectWithoutProductsInput[]
    createMany?: mediaCreateManyProductsInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type cart_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductsInput | cart_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductsInput | cart_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductsInput | cart_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<commentsCreateWithoutProductsInput, commentsUncheckedCreateWithoutProductsInput> | commentsCreateWithoutProductsInput[] | commentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProductsInput | commentsCreateOrConnectWithoutProductsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutProductsInput | commentsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: commentsCreateManyProductsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutProductsInput | commentsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutProductsInput | commentsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type mediaUpdateManyWithoutProductsNestedInput = {
    create?: XOR<mediaCreateWithoutProductsInput, mediaUncheckedCreateWithoutProductsInput> | mediaCreateWithoutProductsInput[] | mediaUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutProductsInput | mediaCreateOrConnectWithoutProductsInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutProductsInput | mediaUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: mediaCreateManyProductsInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutProductsInput | mediaUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutProductsInput | mediaUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductsInput | cart_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductsInput | cart_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductsInput | cart_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<commentsCreateWithoutProductsInput, commentsUncheckedCreateWithoutProductsInput> | commentsCreateWithoutProductsInput[] | commentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProductsInput | commentsCreateOrConnectWithoutProductsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutProductsInput | commentsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: commentsCreateManyProductsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutProductsInput | commentsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutProductsInput | commentsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type mediaUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<mediaCreateWithoutProductsInput, mediaUncheckedCreateWithoutProductsInput> | mediaCreateWithoutProductsInput[] | mediaUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutProductsInput | mediaCreateOrConnectWithoutProductsInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutProductsInput | mediaUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: mediaCreateManyProductsInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutProductsInput | mediaUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutProductsInput | mediaUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type cartsCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutUsersInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type cartsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type cartsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutUsersInput | cartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutUsersInput | cartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutUsersInput | cartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type likesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUsersInput | likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUsersInput | likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUsersInput | likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type cartsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutUsersInput | cartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutUsersInput | cartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutUsersInput | cartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUsersInput | likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUsersInput | likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUsersInput | likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type cartsCreateWithoutCart_itemsInput = {
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
  }

  export type cartsCreateOrConnectWithoutCart_itemsInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
  }

  export type productsCreateWithoutCart_itemsInput = {
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutProductsInput
    media?: mediaCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutProductsInput
    media?: mediaUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCart_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
  }

  export type cartsUpsertWithoutCart_itemsInput = {
    update: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cartsUpdateWithoutCart_itemsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpsertWithoutCart_itemsInput = {
    update: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateWithoutCart_itemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutProductsNestedInput
    media?: mediaUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutProductsNestedInput
    media?: mediaUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type cart_itemsCreateWithoutCartsInput = {
    quantity?: number | null
    products?: productsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutCartsInput = {
    id?: number
    product_id?: number | null
    quantity?: number | null
  }

  export type cart_itemsCreateOrConnectWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsCreateManyCartsInputEnvelope = {
    data: cart_itemsCreateManyCartsInput | cart_itemsCreateManyCartsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCartsInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCartsInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCartsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutCartsInput, cart_itemsUncheckedUpdateWithoutCartsInput>
    create: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutCartsInput, cart_itemsUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutCartsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutCartsInput>
  }

  export type cart_itemsScalarWhereInput = {
    AND?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    OR?: cart_itemsScalarWhereInput[]
    NOT?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    id?: IntFilter<"cart_items"> | number
    cart_id?: IntNullableFilter<"cart_items"> | number | null
    product_id?: IntNullableFilter<"cart_items"> | number | null
    quantity?: IntNullableFilter<"cart_items"> | number | null
  }

  export type usersUpsertWithoutCartsInput = {
    update: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCartsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
  }

  export type usersUpdateWithoutCartsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateWithoutOther_commentsInput = {
    content?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    products?: productsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
    likes?: likesCreateNestedManyWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutOther_commentsInput = {
    id?: number
    user_id?: number | null
    product_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
    likes?: likesUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutOther_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
  }

  export type commentsCreateWithoutCommentsInput = {
    content?: string | null
    created_at?: Date | string | null
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    products?: productsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
    likes?: likesCreateNestedManyWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutCommentsInput = {
    id?: number
    user_id?: number | null
    product_id?: number | null
    content?: string | null
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
    likes?: likesUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsCreateManyCommentsInputEnvelope = {
    data: commentsCreateManyCommentsInput | commentsCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutCommentsInput = {
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    media?: mediaCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCommentsInput = {
    id?: number
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    media?: mediaUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCommentsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCommentsInput, productsUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type likesCreateWithoutCommentsInput = {
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutCommentsInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
  }

  export type likesCreateOrConnectWithoutCommentsInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutCommentsInput, likesUncheckedCreateWithoutCommentsInput>
  }

  export type likesCreateManyCommentsInputEnvelope = {
    data: likesCreateManyCommentsInput | likesCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithoutOther_commentsInput = {
    update: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutOther_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateWithoutOther_commentsInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    products?: productsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
    likes?: likesUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutOther_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: likesUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUpsertWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
  }

  export type commentsUpdateManyWithWhereWithoutCommentsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    product_id?: IntNullableFilter<"comments"> | number | null
    content?: StringNullableFilter<"comments"> | string | null
    parent_comment_id?: IntNullableFilter<"comments"> | number | null
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type productsUpsertWithoutCommentsInput = {
    update: XOR<productsUpdateWithoutCommentsInput, productsUncheckedUpdateWithoutCommentsInput>
    create: XOR<productsCreateWithoutCommentsInput, productsUncheckedCreateWithoutCommentsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCommentsInput, productsUncheckedUpdateWithoutCommentsInput>
  }

  export type productsUpdateWithoutCommentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    media?: mediaUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    media?: mediaUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type likesUpsertWithWhereUniqueWithoutCommentsInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutCommentsInput, likesUncheckedUpdateWithoutCommentsInput>
    create: XOR<likesCreateWithoutCommentsInput, likesUncheckedCreateWithoutCommentsInput>
  }

  export type likesUpdateWithWhereUniqueWithoutCommentsInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutCommentsInput, likesUncheckedUpdateWithoutCommentsInput>
  }

  export type likesUpdateManyWithWhereWithoutCommentsInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutCommentsInput>
  }

  export type likesScalarWhereInput = {
    AND?: likesScalarWhereInput | likesScalarWhereInput[]
    OR?: likesScalarWhereInput[]
    NOT?: likesScalarWhereInput | likesScalarWhereInput[]
    id?: IntFilter<"likes"> | number
    user_id?: IntNullableFilter<"likes"> | number | null
    comment_id?: IntNullableFilter<"likes"> | number | null
    created_at?: DateTimeNullableFilter<"likes"> | Date | string | null
  }

  export type commentsCreateWithoutLikesInput = {
    content?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    products?: productsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutLikesInput = {
    id?: number
    user_id?: number | null
    product_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutLikesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
  }

  export type usersCreateWithoutLikesInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLikesInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLikesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
  }

  export type commentsUpsertWithoutLikesInput = {
    update: XOR<commentsUpdateWithoutLikesInput, commentsUncheckedUpdateWithoutLikesInput>
    create: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutLikesInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutLikesInput, commentsUncheckedUpdateWithoutLikesInput>
  }

  export type commentsUpdateWithoutLikesInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    products?: productsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type usersUpsertWithoutLikesInput = {
    update: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLikesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateWithoutLikesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type productsCreateWithoutMediaInput = {
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    comments?: commentsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutMediaInput = {
    id?: number
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    comments?: commentsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutMediaInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutMediaInput, productsUncheckedCreateWithoutMediaInput>
  }

  export type productsUpsertWithoutMediaInput = {
    update: XOR<productsUpdateWithoutMediaInput, productsUncheckedUpdateWithoutMediaInput>
    create: XOR<productsCreateWithoutMediaInput, productsUncheckedCreateWithoutMediaInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutMediaInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutMediaInput, productsUncheckedUpdateWithoutMediaInput>
  }

  export type productsUpdateWithoutMediaInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    comments?: commentsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    user_id?: number | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    comments?: commentsCreateNestedManyWithoutProductsInput
    media?: mediaCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    name?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    category_id?: number | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    comments?: commentsUncheckedCreateNestedManyWithoutProductsInput
    media?: mediaUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    comments?: commentsUpdateManyWithoutProductsNestedInput
    media?: mediaUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutProductsNestedInput
    media?: mediaUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type order_itemsCreateWithoutOrdersInput = {
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    products?: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number
    product_id?: number | null
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrdersInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    quantity?: IntNullableFilter<"order_items"> | number | null
    price?: DecimalNullableFilter<"order_items"> | Decimal | DecimalJsLike | number | string | null
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type cart_itemsCreateWithoutProductsInput = {
    quantity?: number | null
    carts?: cartsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    cart_id?: number | null
    quantity?: number | null
  }

  export type cart_itemsCreateOrConnectWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemsCreateManyProductsInputEnvelope = {
    data: cart_itemsCreateManyProductsInput | cart_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutProductsInput = {
    content?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
    likes?: likesCreateNestedManyWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutProductsInput = {
    id?: number
    user_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
    likes?: likesUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutProductsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutProductsInput, commentsUncheckedCreateWithoutProductsInput>
  }

  export type commentsCreateManyProductsInputEnvelope = {
    data: commentsCreateManyProductsInput | commentsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type mediaCreateWithoutProductsInput = {
    url: string
    type?: string | null
  }

  export type mediaUncheckedCreateWithoutProductsInput = {
    id?: number
    url: string
    type?: string | null
  }

  export type mediaCreateOrConnectWithoutProductsInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutProductsInput, mediaUncheckedCreateWithoutProductsInput>
  }

  export type mediaCreateManyProductsInputEnvelope = {
    data: mediaCreateManyProductsInput | mediaCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutProductsInput = {
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    orders?: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    order_id?: number | null
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutProductsInput, cart_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutProductsInput, cart_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutProductsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutProductsInput, commentsUncheckedUpdateWithoutProductsInput>
    create: XOR<commentsCreateWithoutProductsInput, commentsUncheckedCreateWithoutProductsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutProductsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutProductsInput, commentsUncheckedUpdateWithoutProductsInput>
  }

  export type commentsUpdateManyWithWhereWithoutProductsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutProductsInput>
  }

  export type mediaUpsertWithWhereUniqueWithoutProductsInput = {
    where: mediaWhereUniqueInput
    update: XOR<mediaUpdateWithoutProductsInput, mediaUncheckedUpdateWithoutProductsInput>
    create: XOR<mediaCreateWithoutProductsInput, mediaUncheckedCreateWithoutProductsInput>
  }

  export type mediaUpdateWithWhereUniqueWithoutProductsInput = {
    where: mediaWhereUniqueInput
    data: XOR<mediaUpdateWithoutProductsInput, mediaUncheckedUpdateWithoutProductsInput>
  }

  export type mediaUpdateManyWithWhereWithoutProductsInput = {
    where: mediaScalarWhereInput
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyWithoutProductsInput>
  }

  export type mediaScalarWhereInput = {
    AND?: mediaScalarWhereInput | mediaScalarWhereInput[]
    OR?: mediaScalarWhereInput[]
    NOT?: mediaScalarWhereInput | mediaScalarWhereInput[]
    id?: IntFilter<"media"> | number
    product_id?: IntNullableFilter<"media"> | number | null
    url?: StringFilter<"media"> | string
    type?: StringNullableFilter<"media"> | string | null
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type cartsCreateWithoutUsersInput = {
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsCreateOrConnectWithoutUsersInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsCreateManyUsersInputEnvelope = {
    data: cartsCreateManyUsersInput | cartsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutUsersInput = {
    content?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    products?: productsCreateNestedOneWithoutCommentsInput
    likes?: likesCreateNestedManyWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    product_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
    likes?: likesUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutUsersInput = {
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutUsersInput = {
    id?: number
    comment_id?: number | null
    created_at?: Date | string | null
  }

  export type likesCreateOrConnectWithoutUsersInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput>
  }

  export type likesCreateManyUsersInputEnvelope = {
    data: likesCreateManyUsersInput | likesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type cartsUpsertWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    update: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsUpdateWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    data: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
  }

  export type cartsUpdateManyWithWhereWithoutUsersInput = {
    where: cartsScalarWhereInput
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyWithoutUsersInput>
  }

  export type cartsScalarWhereInput = {
    AND?: cartsScalarWhereInput | cartsScalarWhereInput[]
    OR?: cartsScalarWhereInput[]
    NOT?: cartsScalarWhereInput | cartsScalarWhereInput[]
    id?: IntFilter<"carts"> | number
    user_id?: IntNullableFilter<"carts"> | number | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type likesUpsertWithWhereUniqueWithoutUsersInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutUsersInput, likesUncheckedUpdateWithoutUsersInput>
    create: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput>
  }

  export type likesUpdateWithWhereUniqueWithoutUsersInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutUsersInput, likesUncheckedUpdateWithoutUsersInput>
  }

  export type likesUpdateManyWithWhereWithoutUsersInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    total_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type cart_itemsCreateManyCartsInput = {
    id?: number
    product_id?: number | null
    quantity?: number | null
  }

  export type cart_itemsUpdateWithoutCartsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commentsCreateManyCommentsInput = {
    id?: number
    user_id?: number | null
    product_id?: number | null
    content?: string | null
    created_at?: Date | string | null
  }

  export type likesCreateManyCommentsInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
  }

  export type commentsUpdateWithoutCommentsInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    products?: productsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
    likes?: likesUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
    likes?: likesUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUpdateWithoutCommentsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateManyOrdersInput = {
    id?: number
    product_id?: number | null
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type cart_itemsCreateManyProductsInput = {
    id?: number
    cart_id?: number | null
    quantity?: number | null
  }

  export type commentsCreateManyProductsInput = {
    id?: number
    user_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
  }

  export type mediaCreateManyProductsInput = {
    id?: number
    url: string
    type?: string | null
  }

  export type order_itemsCreateManyProductsInput = {
    id?: number
    order_id?: number | null
    quantity?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type cart_itemsUpdateWithoutProductsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    carts?: cartsUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commentsUpdateWithoutProductsInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
    likes?: likesUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
    likes?: likesUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaUpdateWithoutProductsInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mediaUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mediaUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsUpdateWithoutProductsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orders?: ordersUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type cartsCreateManyUsersInput = {
    id?: number
    created_at?: Date | string | null
  }

  export type commentsCreateManyUsersInput = {
    id?: number
    product_id?: number | null
    content?: string | null
    parent_comment_id?: number | null
    created_at?: Date | string | null
  }

  export type likesCreateManyUsersInput = {
    id?: number
    comment_id?: number | null
    created_at?: Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    total_amount?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type cartsUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUpdateWithoutUsersInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    products?: productsUpdateOneWithoutCommentsNestedInput
    likes?: likesUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
    likes?: likesUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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