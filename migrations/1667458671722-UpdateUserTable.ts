import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserTable1667458671722 implements MigrationInterface {
  name = 'UpdateUserTable1667458671722';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`sid\` varchar(10) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD UNIQUE INDEX \`IDX_d0f652db5c9a1f26a83ffb1eb9\` (\`sid\`)
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP INDEX \`IDX_d0f652db5c9a1f26a83ffb1eb9\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`sid\`
        `);
  }
}
