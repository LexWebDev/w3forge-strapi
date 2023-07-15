/**
 * article controller
 */

import { createCoreController } from '@strapi/strapi/lib/factories'

export default createCoreController('api::article.article', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params

    const entity = await strapi.db.query('api::article.article').findOne({
      where: { slug: id },
      populate: ['author', 'category', 'picture'],
    })

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

    return this.transformResponse(sanitizedEntity)
  },
}))
