import { EntityRepository, Repository } from "typeorm";
import { Food } from "../entity/food.entity";

@EntityRepository(Food)
export class FoodRepository extends Repository<Food>{ }