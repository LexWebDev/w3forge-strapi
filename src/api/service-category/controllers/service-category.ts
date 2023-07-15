/**
 * service-category controller
 */

import { createCoreController } from '@strapi/strapi/lib/factories'

export default createCoreController(
  'api::service-category.service-category',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params

      const entity = await strapi.db
        .query('api::service-category.service-category')
        .findOne({
          where: { slug: id },
          populate: [
            'testimonials.author',
            'testimonials.tags',
            'testimonials',
          ],
        })

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

      return this.transformResponse(sanitizedEntity)
    },
  })
)
