const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validationSlug = {
    slug: {
        in: ["params"],
        custom: {
            options: async (value) => {
                const slug = await prisma.post.findUnique({ where: { slug: value } });

                if (!slug) throw new Error(`Non esiste un post con slug: ${value}`);

                return true;
            }

        }
    }
}

const validationCategoryId = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Id deve essere un numero intero"
        },
        custom: {
            options: async (value) => {
                const id = await prisma.category.findUnique({ where: { id: parseInt(value) } });

                if (!id) throw new Error(`Non esiste una categoria con id:${value}`);

                return true;
            }

        }
    }
}

module.exports = { validationSlug, validationCategoryId };