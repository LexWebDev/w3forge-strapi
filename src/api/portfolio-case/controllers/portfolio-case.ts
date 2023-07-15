/**
 * portfolio-case controller
 */

import { createCoreController } from '@strapi/strapi/lib/factories'

export default createCoreController(
  'api::portfolio-case.portfolio-case',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params

      const entity = await strapi.db
        .query('api::portfolio-case.portfolio-case')
        .findOne({
          where: { slug: id },
          populate: ['*', 'tags', 'images.image'],
        })

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

      return this.transformResponse(sanitizedEntity)
    },
  })
)
