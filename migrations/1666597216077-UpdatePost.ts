import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePost1666597216077 implements MigrationInterface {
  name = 'UpdatePost1666597216077';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`post\` CHANGE \`thumbnail\` \`thumbnail\` varchar(100) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`value\` \`value\` varchar(255) NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`value\` \`value\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\` CHANGE \`thumbnail\` \`thumbnail\` varchar(100) NOT NULL
        `);
  }
}
