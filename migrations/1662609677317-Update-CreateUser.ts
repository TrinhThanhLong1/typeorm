import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCreateUser1662609677317 implements MigrationInterface {
  name = 'CreateUser1662609677317';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`name\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`last_name\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`first_name\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`gender\` enum ('1', '2') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`position\` enum ('1', '2', '3') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`birthday\` varchar(50) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`start_date\` varchar(50) NULL
        `);
    await queryRunner.query(`
        ALTER TABLE \`user\`
        ADD \`avatar\` varchar(100) NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`start_date\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`birthday\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`gender\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`first_name\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`last_name\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`name\` varchar(255) NULL
        `);
  }
}
