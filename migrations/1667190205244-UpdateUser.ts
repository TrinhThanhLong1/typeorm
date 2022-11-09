import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUser1667190205244 implements MigrationInterface {
  name = 'UpdateUser1667190205244';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`avatar\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`avatar\` varchar(255) NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`avatar\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`avatar\` varchar(100) NULL
        `);
  }
}
