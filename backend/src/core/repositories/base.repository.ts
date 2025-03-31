import {
  FilterQuery,
  Model,
  UpdateQuery,
  UpdateWithAggregationPipeline,
} from 'mongoose';
import {
  CreateResult,
  DeleteResult,
  FindAllResult,
  FindResult,
  UpdateResult,
} from './types/query.types';
import { createPaginatedResult } from 'src/utils/create-paginated.result';
import { PaginationOptions } from './pagination-options.interface';
import { PaginatedResult } from './paginated-result.interface';

export class BaseRepository<T> {
  constructor(private readonly model: Model<T>) {}

  public async create(
    object: Partial<T>,
    session?: any,
  ): Promise<CreateResult<T>> {
    return this.model.create(object);
  }

  public find(query: FilterQuery<T>): FindAllResult<T> {
    return this.model.find(query);
  }

  public findById(id: string): FindResult<T> {
    return this.model.findById(id);
  }

  public findByIdAndDelete(id: string): FindResult<T> {
    return this.model.findByIdAndDelete(id);
  }

  public findByIdAndUpdate(
    id: string,
    update: UpdateWithAggregationPipeline | UpdateQuery<T>,
  ): FindResult<T> {
    return this.model.findByIdAndUpdate(id, update, { new: true });
  }

  public findOne(filter: FilterQuery<T>): FindResult<T> {
    return this.model.findOne(filter);
  }

  public findOneAndDelete(filter: FilterQuery<T>): FilterQuery<T> {
    return this.model.findOneAndDelete(filter);
  }

  public findOneAndUpdate(
    filter: FilterQuery<T>,
    update: UpdateWithAggregationPipeline | UpdateQuery<T>,
  ): FindResult<T> {
    return this.model.findOneAndUpdate(filter, update, {
      new: true,
      setDefaultsOnInsert: true,
    });
  }

  public updateMany(
    filter: FilterQuery<T>,
    object: UpdateWithAggregationPipeline | UpdateQuery<T>,
  ): UpdateResult<T> {
    return this.model.updateMany(filter, object, { new: true });
  }

  public updateOne(
    query: FilterQuery<T>,
    object: UpdateWithAggregationPipeline | UpdateQuery<T>,
  ): UpdateResult<T> {
    return this.model.updateOne(query, object);
  }

  public deleteMany(filter: FilterQuery<T>): DeleteResult<T> {
    return this.model.deleteMany(filter);
  }

  public deleteOne(filter: FilterQuery<T>): DeleteResult<T> {
    return this.model.deleteOne(filter);
  }

  public countDocuments<T>(filter: FilterQuery<T>): FilterQuery<T> {
    return this.model.countDocuments(filter).exec();
  }

  public async paginate(
    filter: FilterQuery<T> = {},
    options: PaginationOptions = {},
  ): Promise<PaginatedResult<T>> {
    const page = options.page || 1;
    const limit = options.limit || 10;
    const skip = (page - 1) * limit;

    const recordsQuery = this.model
      .find(filter)
      .sort(options.sort)
      .skip(skip)
      .limit(limit);
    const countQuery = this.model.countDocuments(filter);

    const [records, total] = await Promise.all([
      recordsQuery.exec(),
      countQuery.exec(),
    ]);

    return createPaginatedResult(records, total, page, limit);
  }
}
