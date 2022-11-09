import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserPost1665029418996 implements MigrationInterface {
  name = 'UpdateUserPost1665029418996';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`post\`
            ADD \`view\` int NOT NULL DEFAULT '0'
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\` DROP COLUMN \`status\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\`
            ADD \`status\` int NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`type\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`type\` int NOT NULL DEFAULT '2'
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`gender\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`gender\` int NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`position\` int NOT NULL DEFAULT '2'
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`status\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`status\` int NOT NULL DEFAULT '1'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`status\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`status\` enum ('1', '0') NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`position\` enum ('1', '2', '3') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`gender\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`gender\` enum ('1', '2') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`type\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`type\` enum ('1', '2') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\` DROP COLUMN \`status\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\`
            ADD \`status\` enum ('1', '0') NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\` DROP COLUMN \`view\`
        `);
  }
}
